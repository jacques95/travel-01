import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { loadDevTools } from "jira-dev-tool";

loadDevTools(() => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
