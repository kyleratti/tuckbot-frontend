import React from "react";

export interface VideoTitleProps {
  title: string;
  redditPostId: string;
}

type Props = VideoTitleProps;
const VideoTitle: React.FC<Props> = ({ title, redditPostId }) => (
  <div className="videoTitle">
    <h2>
      {title}{" "}
      <small>
        via <a href={"https://reddit.com/" + redditPostId}>reddit</a>
      </small>
    </h2>
  </div>
);

export default VideoTitle;
