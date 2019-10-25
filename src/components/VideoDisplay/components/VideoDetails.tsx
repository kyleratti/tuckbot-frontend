import * as React from "react";
import RandomVideoLink from "../../Links/RandomVideoLink";
import RedditPostLink from "../../Links/RedditPostLink";

export interface VideoDetailsProps {
  redditPostId: string;
}

type Props = VideoDetailsProps;
const VideoDetails: React.FC<Props> = ({ redditPostId }) => (
  <div className="videoDetails">
    <ul className="inline-list">
      <li>
        <RedditPostLink redditPostId={redditPostId} />
      </li>
    </ul>
  </div>
);

export default VideoDetails;
