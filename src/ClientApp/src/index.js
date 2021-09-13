import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./styles.scss";
import "@vismaux/nordic-cool/dist/css/nc.min.css";
import * as dayjs from "dayjs";
dayjs().format();

  ReactDOM.render(
      <App />,
    document.getElementById("root")
  );
