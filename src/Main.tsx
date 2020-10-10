import * as React from "react";
import { HashRouter as Router } from "react-router-dom";
import { AuthenticationProvider } from "./context/authcontext";
import Routes from "./Routes";

const Main: React.FunctionComponent = () => (
  <AuthenticationProvider>
    <Router>
      <Routes />
    </Router>
  </AuthenticationProvider>
);

export default Main;
