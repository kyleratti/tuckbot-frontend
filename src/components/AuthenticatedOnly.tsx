import React from "react";
import { isAuthed } from "../context/authcontext";
import ConditionalRender from "./ConditionalRender";

const AuthenticatedOnly: React.FC = ({ children }) => (
  <ConditionalRender shouldRender={isAuthed()}>{children}</ConditionalRender>
);

export default AuthenticatedOnly;
