import * as React from "react";
import { render, hydrate } from "react-dom";
import { renderToString } from "react-dom/server";
import "./css/app.scss";
import Main from "./Main";
import LandingPage from "./pages/LandingPage";

const mainElement = document.getElementById("main");

if (mainElement?.hasChildNodes()) {
  hydrate(<Main />, mainElement);
} else {
  render(<Main />, mainElement);
}
