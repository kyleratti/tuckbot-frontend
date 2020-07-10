import React from "react";

const EmbedContainer: React.FunctionComponent = ({ children }) => (
  <div className="wrapper">
    <div className="embed-container embedded">
      <div className="content">{children}</div>
    </div>
  </div>
);

export default EmbedContainer;
