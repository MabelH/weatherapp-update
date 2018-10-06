import axios from "axios";
import config from "../config.js";

const GOOGLE_API_KEY = config.googleapis.key;
const OPENWEATHERMAP_API_KEY = config.openweathermap.key;

/* Function that returns an action with the payload location
*/
export function editLocation(location) {
  return {
    type: "EDIT_LOCATION",
    payload: location
  };
}

/* Function that retrieves the current weather based on
  the location
*/
export const getCurrentForecast = (lat, lon) => {
  return axios
    .get(
      "https://api.openweathermap.org/data/2.5/weather?&cnt=32&units=imperial&cnt=7",
      {
        params: {
          lat: lat,
          lon: lon,
          APPID: OPENWEATHERMAP_API_KEY
        }
      }
    )
    .catch(function(error) {
      console.log(error);
    });
};

/* Function that retrieves the weather forecast for the next 4 days based on
  the location
*/
export const getFourDayForecast = (lat, lon) => {
  return axios
    .get(
      "https://api.openweathermap.org/data/2.5/forecast?&cnt=32&units=imperial&cnt=7",
      {
        params: {
          lat: lat,
          lon: lon,
          APPID: OPENWEATHERMAP_API_KEY
        }
      }
    )
    .catch(function(error) {
      console.log(error);
    });
};

/* Function that retrieves the latitude and longitude based on
   the location entered. It dispatches an action to call getCurrentWeather
*/
export const getGeoLocation = location => {
  return dispatch => {
    return axios
      .get("https://maps.googleapis.com/maps/api/geocode/json?", {
        params: {
          address: location,

          key: GOOGLE_API_KEY
        }
      })
      .then(response => {
        dispatch(
          getCurrentWeather(
            response.data.results[0].geometry.location.lat,
            response.data.results[0].geometry.location.lng
          )
        );
      })
      .catch(function(error) {
        //console.log(error);
      });
  };
};

/* Function that uses axios.all to retrieve the weather
   from two API using two functions listed above. It dispatches an 
   action to call updateForCast
*/
export const getCurrentWeather = (lat, lon) => {
  return dispatch => {
    return axios
      .all([getFourDayForecast(lat, lon), getCurrentForecast(lat, lon)])
      .then(
        axios.spread((forecast, current) => {
          // Both requests are now complete
          let data = forecast.data.list;

          //Get weather only once a day. Since the api
          // provides eight entries per day, I'm only selecting
          // indexes that are divisible by eight.

          let days = data.filter((item, index) => {
            return index % 8 === 0;
          });

          dispatch(
            updateForCast(
              days,
              current.data.weather[0].icon,
              current.data.name,
              current.data.main.temp,
              current.data.weather[0].main,
              current.data.main.humidity,
              current.data.wind.speed
            )
          );
        })
      )
      .catch(function(error) {
        console.log(error);
      });
  };
};

/* Function that returns an action with the payload acquired
   from the api above
*/
export const updateForCast = (
  date,
  icon,
  city,
  temp,
  forecast,
  humidity,
  wind
) => {
  return {
    type: "FETCH_FORECAST",
    payload: {
      date,
      icon,
      city,
      temp,
      forecast,
      humidity,
      wind
    }
  };
};
