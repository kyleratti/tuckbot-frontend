import * as React from "react";
import Footing from "./Footing";
import Heading from "./Heading";

const PageContainer: React.FunctionComponent = ({ children }) => (
  <div className="wrapper">
    <Heading />

    <div className="page-container">
      <div className="content">{children}</div>
    </div>

    <Footing />
  </div>
);

export default PageContainer;
