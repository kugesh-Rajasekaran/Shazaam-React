import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <Components/>,
  document.getElementById("root")
);


