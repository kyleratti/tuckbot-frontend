import * as React from "react";
import { render } from "react-dom";
import ReactGA from "react-ga";
import { config } from "./config";
import "./css/app.scss";
import Main from "./Main";

const googleAnalyticsId = config.tuckbot.frontend.googleAnalyticsId;

if (googleAnalyticsId) {
  ReactGA.initialize(googleAnalyticsId);
  ReactGA.pageview(window.location.pathname + window.location.hash);
}

render(<Main />, document.getElementById("main"));
