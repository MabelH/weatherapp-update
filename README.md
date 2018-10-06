# weather-app


Working Demo: https://salty-reaches-97290.herokuapp.com

![alt text](https://i.imgur.com/AHnl1yV.png "Weather app")

## Project goals:

This weather app uses OpenWeatherMap API to provide the weather. In addition, it uses Google Geocoding API in order to allow users to enter different inputs such
as zipcode, city, state or country.

## Tech Stack:
- React
- Redux
- React-redux
- JavaScript
- Styled-components

## Prerequisites:

Before running app, you must edit the src/config.js file with your API keys:

#### Google Geocoding API key
- the key can be retrieved here: https://developers.google.com/maps/documentation/

#### OpenWeatherMap API key
- the key can be retrieved here: https://openweathermap.org/appid

Update the config.js file with your keys:

```
module.exports = {
	googleapis: {
		key: process.env.REACT_APP_GEO_APIKEY
	},
	openweathermap: {
		key: process.env.REACT_APP_APIKEY
	}
};


```


## Tests
To run test use npm test

## Installation
git clone

npm install

npm start

