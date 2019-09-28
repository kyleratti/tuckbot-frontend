import * as React from "react";

export interface VideoPlayerProps {
  mirrorUrl: string;
}

type Props = VideoPlayerProps;
const VideoPlayer: React.FC<Props> = ({ mirrorUrl }) => (
  <video controls poster="/img/poster.jpg" src={mirrorUrl}></video>
);

export default VideoPlayer;
