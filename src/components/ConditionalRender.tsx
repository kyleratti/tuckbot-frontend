import React from "react";

type ConditionalRenderProps = {
  shouldRender: boolean;
  falseRender?: React.ReactNode;
};

const ConditionalRender: React.FC<ConditionalRenderProps> = ({
  shouldRender,
  falseRender,
  children,
}) => {
  if (shouldRender) return <>{children}</>;

  return falseRender !== undefined ? <>{falseRender}</> : <></>;
};

export default ConditionalRender;
