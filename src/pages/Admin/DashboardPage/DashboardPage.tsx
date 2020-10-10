import React from "react";
import AdminOnlyContainer from "../../../components/AdminContainer/AdminOnlyContainer";
import RecentVideos from "./components/Stats/RecentVideos";
import TotalVideos from "./components/Stats/TotalVideos";

const AdminDashboardPage: React.FC = () => (
  <AdminOnlyContainer>
    <h2>Dashboard</h2>

    <div className="stats">
      <TotalVideos />
      <RecentVideos />
    </div>
  </AdminOnlyContainer>
);

export default AdminDashboardPage;
