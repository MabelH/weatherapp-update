import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import locationReducer from "./reducers/index";

const DEFAULT_STATE = {};

const middleware = [thunk];

const store = createStore(
	locationReducer,
	DEFAULT_STATE,
	applyMiddleware(...middleware)
);

export default store;
