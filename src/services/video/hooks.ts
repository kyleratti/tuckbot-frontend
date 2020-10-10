import * as React from "react";
import { fetchVideo, VideoResponse } from "./api";

export interface RedditVideoHookData {
  isLoading: boolean;
  errorMessage: string | null;
  videoResponse: VideoResponse | null;
}

export function useRedditVideo(redditPostId: string): RedditVideoHookData {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const [videoResponse, setVideoData] = React.useState<VideoResponse | null>(
    null
  );

  React.useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      try {
        const res = await fetchVideo(redditPostId);
        setVideoData(res);
        setErrorMessage(null);
      } catch (e) {
        setVideoData(null);
        setErrorMessage(e.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [redditPostId]);

  return {
    isLoading,
    errorMessage,
    videoResponse,
  };
}
