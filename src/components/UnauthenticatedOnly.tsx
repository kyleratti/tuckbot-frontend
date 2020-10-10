import React from "react";
import { isAuthed } from "../context/authcontext";
import ConditionalRender from "./ConditionalRender";

const UnauthenticatedOnly: React.FC = ({ children }) => (
  <ConditionalRender shouldRender={!isAuthed()}>{children}</ConditionalRender>
);

export default UnauthenticatedOnly;
