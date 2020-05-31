import * as React from "react";
const poster = require("@/img/poster.png").default;

export interface VideoPlayerProps {
  mirrorUrl: string;
}

type Props = VideoPlayerProps;
const VideoPlayer: React.FC<Props> = ({ mirrorUrl }) => (
  <div className="videoPlayer">
    <video
      controls
      poster={poster}
      src={mirrorUrl}
      controlsList="nodownload"
    ></video>
  </div>
);

export default VideoPlayer;
