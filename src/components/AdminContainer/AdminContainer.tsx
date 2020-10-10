import React from "react";
import PageContainer from "../PageContainer";
import AdminNavigation from "./components/AdminNavigation";

const AdminContainer: React.FC = ({ children }) => (
  <PageContainer>
    <h1>Administration</h1>

    <AdminNavigation />

    <div id="adminContainer">{children}</div>
  </PageContainer>
);

export default AdminContainer;
