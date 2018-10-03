import React, { Component } from "react";
import { WeatherCall } from "../api.js";

import styled from "styled-components";

const TopRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: strech;

	img {
		padding: 0 1em;
	}
`;

const OtherRow = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: strech;

	p {
		flex: 1;
		margin: 0.3em 0;
		padding: 0.1em;
	}
`;

class CurrentTemp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: {}
		};
	}

	render() {
		return (
			<div>
				<TopRow>
					<img
						src={`http://openweathermap.org/img/w/${
							this.props.newicon
						}.png`}
						width="70"
						height="70"
						alt="current weather icon"
					/>
					<p>{this.props.temp} &#8457;</p>
				</TopRow>
				<OtherRow>
					
					<p>{this.props.location}</p>
				</OtherRow>
				<OtherRow>
					<p>Forecast: {this.props.forecast}</p>
				</OtherRow>
				<OtherRow>
					<p>Humidity: {this.props.humidity}</p>
					<p>Wind: {this.props.wind}</p>
				</OtherRow>
			</div>
		);
	}
}

export default CurrentTemp;
