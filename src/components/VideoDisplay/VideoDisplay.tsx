import * as React from "react";
import { setTitle } from "../../services/title/hooks";
import { useRedditVideo } from "../../services/video/hooks";
import Loading from "../Loading";
import EmbeddedVideoPlayer from "./components/EmbeddedVideoPlayer";
import { VideoDownload } from "./components/VideoDownload";
import VideoPlayer from "./components/VideoPlayer";
import VideoTitle from "./components/VideoTitle";

export interface VideoDetailsProps {
  redditPostId: string;
  embedded?: boolean;
}

type Props = VideoDetailsProps;

const VideoDisplay: React.FunctionComponent<Props> = ({
  embedded,
  redditPostId,
}) => {
  const { isLoading, errorMessage, videoResponse } = useRedditVideo(
    redditPostId
  );

  let title = videoResponse ? videoResponse.redditPostTitle : "Watch";

  if (!embedded) setTitle(title);

  if (errorMessage) {
    return <div>Error loading: {errorMessage}</div>; // TODO: convert to component
  } else if (!embedded && isLoading) {
    return <Loading>Loading...</Loading>; // TODO: convert to component
  } else if (videoResponse) {
    const { redditPostTitle, mirrorUrl, redditPostId } = videoResponse;

    return embedded ? (
      <EmbeddedVideoPlayer mirrorUrl={mirrorUrl} title={redditPostTitle} />
    ) : (
      <React.Fragment>
        <VideoTitle title={redditPostTitle} redditPostId={redditPostId} />
        <VideoPlayer mirrorUrl={mirrorUrl} />
        <VideoDownload mirrorUrl={mirrorUrl} />
      </React.Fragment>
    );
  } else {
    return <div>Loading video</div>;
  }
};

export default VideoDisplay;
