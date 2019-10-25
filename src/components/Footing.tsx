import * as React from "react";
import ContactLink from "./Links/ContactLink";
import RandomVideoLink from "./Links/RandomVideoLink";

const Footing: React.FunctionComponent = () => (
  <footer>
    <ul className="inline-list">
      <li>
        <ContactLink />
      </li>
      <li>
        <RandomVideoLink />
      </li>
    </ul>
  </footer>
);

export default Footing;
