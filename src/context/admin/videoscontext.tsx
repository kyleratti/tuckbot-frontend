import React, { createContext, useContext, useState } from "react";
import { AdminVideo } from "../../services/admin/api";

const [AdminVideosGetterContext, AdminVideosSetterContext] = [
  createContext<AdminVideo[]>(new Array<AdminVideo>()),
  createContext<React.Dispatch<React.SetStateAction<AdminVideo[]>> | null>(
    null
  ),
];

const useAdminVideos = () => useContext(AdminVideosGetterContext);
const useAdminVideosSetter = () => useContext(AdminVideosSetterContext);

const AdminVideoProvider: React.FC = ({ children }) => {
  const [adminVideos, setAdminVideos] = useState(new Array<AdminVideo>());

  return (
    <AdminVideosSetterContext.Provider value={setAdminVideos}>
      <AdminVideosGetterContext.Provider value={adminVideos}>
        {children}
      </AdminVideosGetterContext.Provider>
    </AdminVideosSetterContext.Provider>
  );
};

export { AdminVideoProvider, useAdminVideos, useAdminVideosSetter };
