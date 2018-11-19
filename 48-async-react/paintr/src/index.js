import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Provider } from 'react-redux'
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import store from './redux/store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}><App /></Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
