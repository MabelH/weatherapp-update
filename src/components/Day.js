import React, { Component } from "react";

import styled from "styled-components";

const FlexContainer = styled.div`
	border-style: solid;
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
		//padding: 0.2em;
	}
`;

class Day extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: {}
		};
	}

	render() {
		return (
			<FlexContainer>
				<img
					/*src={`http://openweathermap.org/img/w/10n.png`}*/
					src={`http://openweathermap.org/img/w/${
						this.props.icon
					}.png`}
					width="40"
					height="40"
					alt="weather icon"
				/>
				<DataFlexContainer>
					<p>{this.props.date}</p>
					<p>{this.props.temperature} &#8457;</p>
					<p>Humidity: {this.props.humidity}</p>
					<p>Wind: {this.props.wind} MPH</p>
					<p>forecast: {this.props.forecast}</p>
				</DataFlexContainer>
			</FlexContainer>
		);
	}
}

export default Day;
