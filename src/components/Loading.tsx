import * as React from "react";

const Loading: React.FunctionComponent = ({ children }) => (
  <div>
    <div className="loader"></div>

    {children}
  </div>
);

export default Loading;
