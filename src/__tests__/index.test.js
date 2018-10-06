import { editLocation, updateForCast } from "../actions/index";
import reducer from "../reducers/index";

describe("editLocation()", function() {
	it("should contain the right action type", function() {
		const action = editLocation();
		expect(action.type).toEqual("EDIT_LOCATION");
	});

	it("should contain the location in the payload", function() {
		const action = editLocation(10040);
		expect(action.payload).toEqual(10040);
	});
});

describe("updateForCast()", function() {
	it("should contain the right action type", function() {
		const action = updateForCast();
		expect(action.type).toEqual("FETCH_FORECAST");
	});
});

describe("Location reducer", function() {
	it("should store the location in the state", function() {
		const newState = reducer(undefined, editLocation(10040));
		expect(newState.address).toEqual(10040);
	});
});

it("should work", function() {
	expect(true).toEqual(true);
});
