import * as React from "react";
import { HashRouter as Router } from "react-router-dom";
import Routes from "./Routes";

const Main: React.FunctionComponent = () => (
  <Router>
    <Routes />
  </Router>
);

export default Main;
