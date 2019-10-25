import * as React from "react";

export interface RedditPostLinkProps {
  redditPostId: string;
}

const RedditPostLink: React.FunctionComponent<RedditPostLinkProps> = ({
  redditPostId
}) => <a href={"https://reddit.com/" + redditPostId}>see on reddit</a>;

export default RedditPostLink;
