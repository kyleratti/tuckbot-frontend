import * as React from "react";

export interface VideoTitleProps {
  title: string;
}

type Props = VideoTitleProps;
const VideoTitle: React.FC<Props> = ({ title }) => (
  <div className="videoTitle">
    <h2>{title}</h2>
  </div>
);

export default VideoTitle;
