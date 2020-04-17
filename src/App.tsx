import * as React from "react";
import { render, hydrate } from "react-dom";
import { renderToString } from "react-dom/server";
import "./css/app.scss";
import Main from "./Main";
import LandingPage from "./pages/LandingPage";

render(<Main />, document.getElementById("main"));
