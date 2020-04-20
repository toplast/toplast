import "./globals.scss";
import "./services/axios";
import * as serviceWorker from "./serviceWorker";
import { App } from "./App";
import dotenv from "dotenv";
import React from "react";
import ReactDOM from "react-dom";

dotenv.config();

ReactDOM.render(<App />, document.querySelector("#root"));
serviceWorker.unregister();
