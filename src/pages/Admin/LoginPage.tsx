import React from "react";
import { Link, Redirect } from "react-router-dom";
import AdminContainer from "../../components/AdminContainer";
import ConditionalRender from "../../components/ConditionalRender";
import { isAuthed } from "../../context/authcontext";
import { setTitle } from "../../services/title/hooks";

const LoginPage: React.FC = () => {
  setTitle("Login");

  return (
    <ConditionalRender
      shouldRender={!isAuthed()}
      falseRender={<Redirect to="/admin/dashboard" />}
    >
      <AdminContainer>
        Please <Link to="/admin/login/handoff">log in via reddit</Link> to
        continue.
      </AdminContainer>
    </ConditionalRender>
  );
};

export default LoginPage;
