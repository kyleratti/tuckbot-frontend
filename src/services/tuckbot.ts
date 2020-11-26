import { GetVideoResponse } from "../structures/tuckbot";

const API_URL = `https://api.tuckbot.tv`;

const buildUrl = (str: string) => `${API_URL}/${str}`;

export const getVideo = async (redditPostId: string) => {
  const resp = await fetch(buildUrl(`public/video/${redditPostId}`), {
    method: "GET",
  });

  if (!resp.ok) {
    console.error(resp.status);
    throw resp.statusText;
  }

  return (resp.json() as unknown) as GetVideoResponse;
};
