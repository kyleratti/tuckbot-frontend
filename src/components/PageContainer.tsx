import * as React from "react";
import Footing from "./Footing";
import Heading from "./Heading";

const PageContainer: React.FunctionComponent = ({ children }) => (
  <div className="wrapper">
    <Heading />

    <div className="grid-wrapper">
      <div className="grid-section"></div>

      <div className="grid-section page-container">
        <div className="content">{children}</div>
      </div>

      <div className="grid-section"></div>
    </div>

    <Footing />
  </div>
);

export default PageContainer;
