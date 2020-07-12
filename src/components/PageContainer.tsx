import * as React from "react";
import Heading from "./Heading";

const PageContainer: React.FunctionComponent = ({ children }) => (
  <div className="wrapper">
    <Heading />

    <div className="page-container">
      <div className="content">{children}</div>
    </div>
  </div>
);

export default PageContainer;
