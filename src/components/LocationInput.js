import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGeoLocation } from "../actions/index";
import styled from "styled-components";

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
		color: white;
		font-size: 1rem;
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

class LocationInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			address: " "
		};
	}

	componentWillMount() {
		this.props.getGeoLocation("10026");
	}

	onInputChange = event => {
		this.setState({ address: event.target.value });
	};

	resetInput() {
		this.setState({ address: "" });
	}

	handleClick = e => {
		e.preventDefault();

		this.props.getGeoLocation(this.state.address);

		this.resetInput();
	};

	render() {
		return (
			<FlexContainer>
				<Form action="/">
					<label>
						Search:{" "}
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

					<Button
						type="submit"
						value="Submit"
						onClick={this.handleClick}
					>
						Lookup
					</Button>
				</Form>
			</FlexContainer>
		);
	}
}

LocationInput.propTypes = {
	getGeoLocation: PropTypes.func.isRequired
};

export default connect(null, { getGeoLocation })(LocationInput);
