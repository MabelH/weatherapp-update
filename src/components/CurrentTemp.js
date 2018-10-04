import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	background-color: #b6d471;
	padding: 0.5em;
`;

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

	p {
		font-size: 2rem;
		font-weight: bold;
		margin: 0;
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
		margin: 0.2em 0;
		padding: 0.1em;
		font-size: 0.9rem;
	}
`;

class CurrentTemp extends Component {
	render() {
		return (
			<Wrapper>
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
			</Wrapper>
		);
	}
}

export default CurrentTemp;
