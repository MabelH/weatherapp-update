import React from "react";
import Day from "./Day";
import styled from "styled-components";

const ListContainer = styled.ul`
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
`;

function DayList(props) {
	const days = props.days;
	const listofDays = days.map((number, index) => (
		<Day
			key={index}
			icon={days[index].weather[0].icon}
			date={days[index].dt_txt.slice(5, 10)}
			temperature={days[index].main.temp}
			humidity={days[index].main.humidity}
			wind={days[index].wind.speed}
			forecast={days[index].weather[0].main}
		/>
	));
	return <ListContainer>{listofDays}</ListContainer>;
}

export default DayList;
