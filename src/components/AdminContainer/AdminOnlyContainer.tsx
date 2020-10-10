import React from "react";
import RedirectIfNotAuthenticated from "../../pages/Admin/RedirectIfNotAuthenticated";
import AdminContainer from "./AdminContainer";

const AdminOnlyContainer: React.FC = ({ children }) => (
  <AdminContainer>
    <RedirectIfNotAuthenticated>{children}</RedirectIfNotAuthenticated>
  </AdminContainer>
);

export default AdminOnlyContainer;
