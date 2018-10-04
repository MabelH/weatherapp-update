import React, { Component } from "react";

import DayList from "./components/DayList";
import CurrentTemp from "./components/CurrentTemp";
//import { getGeoLocation, fetchData } from "./api.js";
import axios from "axios";
import styled from "styled-components";

const Header = styled.header`
  padding-top: 1em;
  padding-bottom: 0.5em;
  h1 {
    text-align: center;
    color: #282510;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const Form = styled.form`
  padding-bottom: 1em;

  label {
    text-align: center;
    padding-left: 0.7em;
  }
`;

const Button = styled.button`
  background-color: #f06449;
  color: #282510;
  font-size: 1rem;
  padding: 0.5em 0.5em;
  margin-left: 0.5em;
  text-align: center;
`;

const CenterContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;

  align-items: stretch;
  align-content: stretch;
  justify-content: flex-end;
  flex-direction: column;
`;

const Container = styled.div`
  height: 78vh;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: [],
      current: [],
      location: "",
      currentTemp: "",
      currentIcon: "01d",
      currentForecast: "",
      currentHumidity: "",
      currentWind: "",
      address: ""
    };
  }

  /*Function uses google Geocoding Api to 
    retrieve the langitude and longitude
    based on the user input 
  */
  getGeoLocation = e => {
    e.preventDefault();

    //let address = this.state.address;

    return axios
      .get("https://maps.googleapis.com/maps/api/geocode/json?", {
        params: {
          address: this.state.address,
          key: process.env.REACT_APP_GEO_APIKEY
        }
      })
      .then(response => {
        let lat = response.data.results[0].geometry.location.lat;
        let lon = response.data.results[0].geometry.location.lng;
        console.log(lat);
        console.log(lon);
        console.log("inside googleapi");
        this.fetchData(lat, lon);
      });
  };

  /*Function uses forecast Api to 
    retrieve 4 days of weather
  */
  getFourDayForecast = (lat = 40.7127, lon = -74.0059) => {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?&cnt=32&units=imperial&cnt=7",
      {
        params: {
          lat: lat,
          lon: lon,
          APPID: process.env.REACT_APP_APIKEY
        }
      }
    );
  };

  /*Function uses current weather Api to 
    retrieve current weather
  */
  getCurrentForecast = (lat = 40.7127, lon = -74.0059) => {
    return axios.get(
      "https://api.openweathermap.org/data/2.5/weather?&cnt=32&units=imperial&cnt=7",
      {
        params: {
          lat: lat,
          lon: lon,
          APPID: process.env.REACT_APP_APIKEY
        }
      }
    );
  };

  /*Function uses axios to call both weather api and then set the state.
     Initially, it will display the weather for NYC
  */
  fetchData = (lat = 40.7127, lon = -74.0059) => {
    axios
      .all([
        this.getFourDayForecast(lat, lon),
        this.getCurrentForecast(lat, lon)
      ])
      .then(
        axios.spread((acct, current) => {
          // Both requests are now complete

          let data = acct.data.list;

          //Get weather only once a day. Since the api
          // provides eight entries per day, I'm only selecting
          // indexes that are divisible by eight.

          let days = data.filter((item, index) => {
            return index % 8 === 0;
          });

          this.setState({
            days: days,
            currentIcon: current.data.weather[0].icon,
            location: current.data.name,
            currentTemp: current.data.main.temp,
            currentForecast: current.data.weather[0].main,
            currentHumidity: current.data.main.humidity,
            currentWind: current.data.wind.speed
          });

          this.resetInput();
        })
      )
      .catch(function(error) {
        return error;
      });
  };

  onInputChange = event => {
    this.setState({ address: event.target.value });
  };

  resetInput() {
    this.setState({ address: "" });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <Header>
          <h1>Weather App</h1>
        </Header>
        <FlexContainer>
          <Form action="/">
            <label>
              Seach:{" "}
              <input
                type="text"
                placeholder="address, city or zipcode"
                size="18"
                name="location"
                autoFocus={true}
                value={this.state.address}
                onChange={this.onInputChange}
              />
            </label>

            <Button type="submit" value="Submit" onClick={this.getGeoLocation}>
              Lookup
            </Button>
          </Form>
        </FlexContainer>

        <Container>
          <CenterContainer>
            <CurrentTemp
              location={this.state.location}
              newicon={this.state.currentIcon}
              temp={Math.round(this.state.currentTemp)}
              forecast={this.state.currentForecast}
              humidity={this.state.currentHumidity}
              wind={this.state.currentWind}
            />
            <DayList days={this.state.days} />
          </CenterContainer>
        </Container>
      </div>
    );
  }
}

export default App;
