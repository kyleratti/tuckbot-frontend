import * as React from "react";
import Tuckbot from "./Tuckbot";

const PageContainer: React.FunctionComponent = ({ children }) => (
  <div className="wrapper">
    <Tuckbot />
    <div className="page-container">
      <div className="content">{children}</div>
    </div>
  </div>
);

export default PageContainer;
