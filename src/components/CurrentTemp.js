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
						src={`http://openweathermap.org/img/w/10n.png`}
						width="60"
						height="60"
					/>
					<p>76 &#8457;</p>
				</TopRow>
				<OtherRow>
					<p>October 2</p>
					<p>New York</p>
				</OtherRow>
				<OtherRow>
					<p>Forecast: Broken clouds</p>
				</OtherRow>
				<OtherRow>
					<p>73 / 79 F</p>
					<p>Humidity: 63</p>
					<p>Wind: 8 mph</p>
				</OtherRow>
			</div>
		);
	}
}

export default CurrentTemp;
