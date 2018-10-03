import React, { Component } from "react";
import { WeatherCall } from "./api.js";
import DayList from "./components/DayList";
import CurrentTemp from "./components/CurrentTemp";
import axios from "axios";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: []
    };
  }

  fetchData = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?&cnt=32&units=imperial&cnt=7",
        {
          params: {
            lat: 40.7127,
            lon: -74.0059,
            APPID: process.env.REACT_APP_APIKEY
          }
        }
      )
      .then(response => {
        let data = response.data.list;

        //Get weather only once a day
        let days = data.filter((item, index) => {
          return index % 8 === 0;
        });

        this.setState({
          days: days
        });

        console.log(response);
        console.log(data);

        console.log(days);
      })
      .catch(function(error) {
        return error;
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title>Weather App</Title>
        </header>
        <form action="/" onSubmit={this.fetchData}>
          <label>
            Enter a city or zipcode:{" "}
            <input type="text" name="location" autoFocus={true} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <CurrentTemp />
        <DayList days={this.state.days} />
      </div>
    );
  }
}

export default App;
