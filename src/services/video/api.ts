const API_ROOT = "http://localhost:3002/public";

export interface VideoResponse {
  redditPostId: string;
  redditPostTitle: string;
  mirrorUrl: string;
}
export async function fetchVideo(redditPostId: string): Promise<VideoResponse> {
  const res = await fetch(`${API_ROOT}/video/${redditPostId}`);

  if (res.status !== 200) {
    let errorMessage: string;
    try {
      const errorBody = await res.json();
      errorMessage = errorBody.status.message;
    } catch (e) {
      errorMessage = res.statusText;
    }

    throw new Error(`${res.status}: ${errorMessage}`);
  }

  try {
    const result = await res.json();

    return {
      redditPostId: result.data.redditPostId,
      redditPostTitle: result.data.redditPostTitle,
      mirrorUrl: result.data.mirrorUrl
    };
  } catch (e) {
    throw new Error("Server returned an invalid result.");
  }
}
