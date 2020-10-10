import React from "react";
import { Redirect } from "react-router-dom";
import { isAuthed } from "../../context/authcontext";

type RedirectIfNotAuthenticatedProps = {
  to?: string;
};

const RedirectIfNotAuthenticated: React.FC<RedirectIfNotAuthenticatedProps> = ({
  to,
  children,
}) => (isAuthed() ? <>{children}</> : <Redirect to={to || "/admin/login"} />);

export default RedirectIfNotAuthenticated;
