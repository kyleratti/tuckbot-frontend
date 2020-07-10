import * as React from "react";
import { render } from "react-dom";
import ReactGA from "react-ga";
import "./css/app.scss";
import Main from "./Main";

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

if (googleAnalyticsId) {
  console.log(googleAnalyticsId);
  ReactGA.initialize(googleAnalyticsId);
  ReactGA.pageview(window.location.pathname + window.location.hash);
}

render(<Main />, document.getElementById("main"));
