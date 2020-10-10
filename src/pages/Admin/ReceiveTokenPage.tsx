import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useTokenSetter } from "../../context/authcontext";

type ReceiveTokenPageParams = {
  token: string;
};

const ReceiveTokenPage: React.FC<ReceiveTokenPageParams> = () => {
  const { token } = useParams<ReceiveTokenPageParams>();
  const setToken = useTokenSetter();

  if (setToken) setToken(token);

  return <Redirect to="/admin" />;
};

export default ReceiveTokenPage;
