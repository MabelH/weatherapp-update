import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
	background-color: #b6d471;
	//background-color: #f06449;
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

export class CurrentTemp extends Component {
	render() {
		return (
			<Wrapper>
				<TopRow>
					<img
						src={`http://openweathermap.org/img/w/${this.props
							.icon || "10n"}.png`}
						width="80"
						height="70"
						alt="icon"
					/>
					<p>{this.props.temp} &#8457;</p>
				</TopRow>
				<OtherRow>
					<p>{this.props.city}</p>
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

const mapStateToProps = state => {
	return {
		city: state.city,
		icon: state.icon,
		temp: state.temp,
		forecast: state.forecast,
		humidity: state.humidity,
		wind: state.wind
	};
};

export default connect(mapStateToProps)(CurrentTemp);
