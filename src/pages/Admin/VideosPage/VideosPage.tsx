import React from "react";
import AdminOnlyContainer from "../../../components/AdminContainer/AdminOnlyContainer";
import { useAllAdminVideos } from "../../../services/admin/hooks";
import AdminVideoTable from "./components/AdminVideoTable";

const AdminVideosPage: React.FC = () => {
  // const setAdminVideos = useAdminVideosSetter();

  const { status, errorMessage, response } = useAllAdminVideos();

  return (
    <AdminOnlyContainer>
      <div className="search">
        <input
          type="search"
          name="redditPostId"
          placeholder="Enter a reddit post ID"
        />
      </div>

      <p>Here is a table of all videos on the service, descending</p>

      <AdminVideoTable videos={response} />
    </AdminOnlyContainer>
  );
};

export default AdminVideosPage;
