import * as React from "react";

const PageContainer: React.FunctionComponent = ({ children }) => (
  <div className="page-container">
    <div>
      You are inside of a <b>PageContainer</b>
    </div>
    <div className="content">{children}</div>
  </div>
);

export default PageContainer;
