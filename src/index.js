import React from "react";
import ReactDOM from "react-dom";
// ----- styles/index.js
import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

import App from "./App";
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
  	
  	background-color: #d6605E;
  	font-family: 'Pontano Sans', sans-serif;
  	letter-spacing: 2px;
  }
`;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
