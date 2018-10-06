import React, { Component } from "react";

import styled from "styled-components";

const FlexContainer = styled.div`
	//background-color: #fcc151;
	background-color: #f06449;
	border-style: solid;
	border-color: #fcab10;
	border-width: thin;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	img {
		flex: 0 1 3em;
		padding: 0.5em;
	}

	div {
		flex: 2;
	}
`;

const DataFlexContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	p {
		flex: 1 1 50%;
		margin: 0.3em 0;
		font-size: 0.85rem;
	}

	p:nth-child(2) {
		font-size: 1rem;
	}
`;

class Day extends Component {
	render() {
		return (
			<FlexContainer>
				<img
					src={`http://openweathermap.org/img/w/${this.props.icon ||
						"10n"}.png`}
					width="56"
					height="56"
					alt="weather icon"
				/>
				<DataFlexContainer>
					<p>{this.props.date}</p>
					<p>{Math.round(this.props.temperature)} &#8457;</p>
					<p>Humidity: {this.props.humidity}</p>
					<p>Wind: {this.props.wind} mph</p>
					<p>Forecast: {this.props.forecast}</p>
				</DataFlexContainer>
			</FlexContainer>
		);
	}
}

export default Day;
