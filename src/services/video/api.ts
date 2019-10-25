const API_ROOT = `${API_SERVER_ROOT}/public/video`;

export interface VideoResponse {
  redditPostId: string;
  redditPostTitle: string;
  mirrorUrl: string;
}

export async function fetchVideo(redditPostId: string): Promise<VideoResponse> {
  const res = await fetch(`${API_ROOT}/${redditPostId}`, {
    method: "GET"
  });

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

export async function fetchRandom(): Promise<VideoResponse> {
  return fetchVideo("random");
}
