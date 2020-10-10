import HttpStatusCode from "http-status-codes";
import { config } from "../../config";
import { getToken } from "../../context/authcontext";

export type AdminVideo = {
  id: number;
  redditPostId: string;
  redditPostTitle: string;
  mirrorUrl: string;
};

export interface GetAllAdminVideoResponse {
  status: any;
  videos: AdminVideo[];
}

export const getAll = async () => {
  const token = getToken();

  const res = await fetch(`${config.tuckbot.api.url}/v2/videos/admin/all`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const body = await res.json();

  if (res.status !== 200) {
    const error = HttpStatusCode.getStatusText(res.status);

    throw new Error(error);
  }

  return (body as GetAllAdminVideoResponse).videos;
};
