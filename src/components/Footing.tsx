import * as React from "react";
import ContactLink from "./Links/ContactLink";

const Footing: React.FunctionComponent = () => (
  <footer>
    <ul className="inline-list">
      <li>
        <ContactLink />
      </li>
    </ul>
  </footer>
);

export default Footing;
