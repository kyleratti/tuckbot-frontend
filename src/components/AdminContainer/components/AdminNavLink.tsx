import React from "react";
import { Link, LinkProps } from "react-router-dom";

type NavLinkProps = LinkProps;

const AdminNavLink: React.FC<NavLinkProps> = (props) => (
  <li>
    <Link {...props} />
  </li>
);

export default AdminNavLink;
