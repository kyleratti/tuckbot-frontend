import { useEffect, useState } from "react";
import { AdminVideo, getAll } from "./api";

export type GetAllAdminVideoHookData = {
  status: any;
  errorMessage: string | null;
  response: AdminVideo[];
};

const emptyAdminVideos = new Array<AdminVideo>();

export const useAllAdminVideos = (): GetAllAdminVideoHookData => {
  const [status, setStatus] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [response, setResponse] = useState<AdminVideo[]>(emptyAdminVideos);

  useEffect(() => {
    const loadData = async () => {
      setStatus(1);

      try {
        const res = await getAll();
        setErrorMessage(null);
        setResponse(res);
        console.log("done");
      } catch (err) {
        setErrorMessage(err.message || err);
        setResponse(emptyAdminVideos);
        console.error(err);
      } finally {
        setStatus(0);
      }
    };

    loadData();
  }, []);

  return { status, errorMessage, response };
};
