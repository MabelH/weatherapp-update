import React, { Component } from "react";
import Day from "./Day";
import styled from "styled-components";
import { connect } from "react-redux";

export const ListContainer = styled.ul`
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
`;

export class DayList extends Component {
	render() {
		const listofDays = this.props.date.map((number, index) => (
			<Day
				key={index}
				// icon={this.props.date[index].weather[0].icon}
				// date={this.props.date[index].dt_txt.slice(5, 10)}
				// temperature={this.props.date[index].main.temp}
				// humidity={this.props.date[index].main.humidity}
				// wind={this.props.date[index].wind.speed}
				// forecast={this.props.date[index].weather[0].main}
			/>
		));

		return (
			<div>
				<ListContainer>{listofDays}</ListContainer>
			</div>
		);
	}
}

DayList.defaultProps = {
	date: []
};

const mapStateToProps = state => {
	return {
		city: state.city,
		icon: state.icon,
		temp: state.temp,
		forecast: state.forecast,
		humidity: state.humidity,
		wind: state.wind,
		date: state.date
	};
};

export default connect(mapStateToProps)(DayList);
