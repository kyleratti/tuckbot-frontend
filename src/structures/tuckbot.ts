type ApiStatus = {
  status: number;
  message: string;
};

type GetVideoData = {
  redditPostId: string;
  redditPostTitle: string;
  mirrorUrl: string;
};

export type GetVideoResponse = {
  status: ApiStatus;
  data: GetVideoData;
};
