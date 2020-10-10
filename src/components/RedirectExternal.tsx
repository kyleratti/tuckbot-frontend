import React from "react";

type RedirectExternalProps = {
  to: string;
};

const RedirectExternal: React.FC<RedirectExternalProps> = ({ to }) => {
  window.location.href = to;

  return <>Redirecting...</>;
};

export default RedirectExternal;
