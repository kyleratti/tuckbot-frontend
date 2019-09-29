import * as React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/watch/random">watch random video</Link>
      </li>
    </ul>
  </div>
);

export default VideoDetails;
