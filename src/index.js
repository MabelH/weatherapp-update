import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  ${styledNormalize}

  // You can continue writing global styles
  html {
  box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

   body {
    
    //background-color: #d6605E;
     background-image: url("https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?cs=srgb&dl=road-nature-forest-33109.jpg&fm=jpg");
    font-family: 'Pontano Sans', sans-serif;
    letter-spacing: 2px;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
