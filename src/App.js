import React, { Component } from "react";

import DayList from "./components/DayList";
import CurrentTemp from "./components/CurrentTemp";
import LocationInput from "./components/LocationInput";

import styled from "styled-components";

//NEW
import store from "./store";

import { Provider } from "react-redux";

const Header = styled.header`
  padding-top: 1em;
  padding-bottom: 0.5em;
  h1 {
    text-align: center;
    color: #282510;
  }
`;

const CenterContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;

  align-items: stretch;
  align-content: stretch;
  justify-content: flex-end;
  flex-direction: column;
`;

const Container = styled.div`
  /*height: 78vh;*/
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header>
            <h1>Weather App</h1>
          </Header>
          <LocationInput />
          <Container>
            <CenterContainer>
              <CurrentTemp />
              <DayList />
            </CenterContainer>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
