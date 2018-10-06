# weather-app


Working Demo: https://salty-reaches-97290.herokuapp.com

![alt text](https://i.imgur.com/vMNGHVo.png "Weather app")

## Project goals:

This weather app uses OpenWeatherMap API to provide the weather. In addition, it uses Google Geocoding API in order to allow users to enter different inputs such
as zipcode, city, state or country. I initially used React but decided to incorporate Redux for better structure and maintenance. This was the first time I used Redux so it was a great learning experience. I initially had issues accessing the state but using connect made it easier. If I had more time I would incorporate more tests. I would like to practice using axios-mock-adapter. Also, I would add a toggle to allow users to switch between celsius or fahrenheit. I would make some changes to the UI.

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

