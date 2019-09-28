import * as React from "react";

export interface VideoDetailsProps {
  redditPostId: string;
}

type Props = VideoDetailsProps;
const VideoDetails: React.FC<Props> = ({ redditPostId }) => (
  <div className="videoDetails">
    <ul>
      <li>
        <a href={"https://reddit.com/" + redditPostId}>see reddit post</a>
      </li>
      <li>
        <a href="#">open random video</a>
      </li>
    </ul>
  </div>
);

export default VideoDetails;
