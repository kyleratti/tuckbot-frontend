import React from "react";
import { Redirect } from "react-router-dom";
import { useTokenSetter } from "../../context/authcontext";

const LogoutPage: React.FC = () => {
  const setToken = useTokenSetter();

  if (setToken) setToken("");

  return <Redirect to="/" />;
};

export default LogoutPage;
