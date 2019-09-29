import * as React from "react";
import { setTitle } from "../../services/title/hooks";
import { useRedditVideo } from "../../services/video/hooks";
import VideoDetails from "./components/VideoDetails";
import VideoPlayer from "./components/VideoPlayer";
import VideoTitle from "./components/VideoTitle";

export interface VideoDetailsProps {
  redditPostId: string;
}

type Props = VideoDetailsProps;

const VideoDisplay: React.FunctionComponent<Props> = ({ redditPostId }) => {
  const { isLoading, errorMessage, videoResponse } = useRedditVideo(
    redditPostId
  );

  let title = videoResponse ? videoResponse.redditPostTitle : "Watch";

  setTitle(title);

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>; // TODO: convert to component
  } else if (isLoading) {
    return <div>Loading...</div>; // TODO: convert to component
  } else if (videoResponse) {
    const { redditPostTitle, mirrorUrl, redditPostId } = videoResponse;

    return (
      <React.Fragment>
        <VideoTitle title={redditPostTitle} />
        <VideoPlayer mirrorUrl={mirrorUrl} />
        <VideoDetails redditPostId={redditPostId} />
      </React.Fragment>
    );
  } else {
    return <div>Not loading</div>;
  }
};

export default VideoDisplay;
