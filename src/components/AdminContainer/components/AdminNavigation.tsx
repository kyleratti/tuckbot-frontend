import React from "react";
import AuthenticatedOnly from "../../AuthenticatedOnly";
import UnauthenticatedOnly from "../../UnauthenticatedOnly";
import AdminNavLink from "./AdminNavLink";

const AdminNavigation: React.FC = () => (
  <nav>
    <ul>
      <UnauthenticatedOnly>
        <AdminNavLink to="/admin/login">Login</AdminNavLink>
      </UnauthenticatedOnly>

      <AuthenticatedOnly>
        <AdminNavLink to="/admin/dashboard">Dashboard</AdminNavLink>
        <AdminNavLink to="/admin/videos">Videos</AdminNavLink>

        <AdminNavLink to="/admin/logout">Logout</AdminNavLink>
      </AuthenticatedOnly>
    </ul>
  </nav>
);

export default AdminNavigation;
