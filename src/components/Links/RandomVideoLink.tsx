import * as React from "react";
import { Link } from "react-router-dom";

const RandomVideoLink: React.FunctionComponent = () => (
  <Link to="/watch/random">watch a random video</Link>
);

export default RandomVideoLink;
