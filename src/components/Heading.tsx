import React, { useState } from "react";
import { Redirect } from "react-router";

const TUCKER_PETS = 2;

const Heading: React.FC = () => {
  const [pets, setPets] = useState(0);

  if (pets >= TUCKER_PETS) return <Redirect push to="/tucker" />;

  return (
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
    </header>
  );
};

export default Heading;
