const DEFAULT_STATE = {
	date: [],
	address: "10040",
	lat: "",
	lon: "",
	icon: "",
	city: "",
	temp: "",
	forecast: "",
	humidity: "",
	wind: ""
};

/* reducers that depending on the action received updates the state
	and payload
*/
export default function locationReducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case "EDIT_LOCATION":
			return {
				...state,
				address: action.payload
			};
		case "FETCH_GEOCODE":
			return {
				...state,
				lat: action.payload.lat,
				lon: action.payload.lon
			};
		case "FETCH_FORECAST":
			return {
				...state,
				date: action.payload.date,
				icon: action.payload.icon,
				city: action.payload.city,
				temp: action.payload.temp,
				forecast: action.payload.forecast,
				humidity: action.payload.humidity,
				wind: action.payload.wind
			};

		default:
			return state;
	} //END Switch
}
