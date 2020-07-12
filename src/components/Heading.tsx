import React, { useState } from "react";
import { Redirect } from "react-router";
import ContactLink from "./Links/ContactLink";
import TuckerLink from "./Links/TuckerLink";

const TUCKER_PETS = 2;

const Heading: React.FC = () => {
  const [pets, setPets] = useState(0);

  return (
    <React.Fragment>
      {pets >= TUCKER_PETS && <Redirect push to="/tucker" />}
      <header>
        <div className="siteTitle">
          <h1>
            <span id="tuckie-boy" onClick={() => setPets(pets + 1)}>
              🐶
            </span>
            Tuckbot<span className="dot-tv">.tv</span>
          </h1>
        </div>
        <div className="siteComment">
          <span className="label">
            #Black<span className="alt">Lives</span>Matter
          </span>
        </div>
        <nav>
          <ul>
            <li>
              <ContactLink />
            </li>
            <li>
              <TuckerLink />
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Heading;
