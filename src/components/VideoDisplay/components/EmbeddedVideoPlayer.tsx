import * as React from "react";
import poster from "@/img/poster.png";

export interface EmbeddedVideoPlayerProps {
  mirrorUrl: string;
  title: string;
}

type Props = EmbeddedVideoPlayerProps;
const EmbeddedVideoPlayer: React.FC<Props> = ({ mirrorUrl, title }) => (
  <div className="videoPlayer">
    <video
      controls
      poster={poster}
      src={mirrorUrl}
      controlsList="nodownload"
    ></video>
  </div>
);

export default EmbeddedVideoPlayer;
