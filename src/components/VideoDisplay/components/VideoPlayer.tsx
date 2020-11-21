import poster from "@/img/poster.png";
import React from "react";

export interface VideoPlayerProps {
  mirrorUrl: string;
}

type Props = VideoPlayerProps;
const VideoPlayer: React.FC<Props> = ({ mirrorUrl }) => (
  <div className="videoPlayer">
    <video controls poster={poster} src={mirrorUrl}></video>
  </div>
);

export default VideoPlayer;
