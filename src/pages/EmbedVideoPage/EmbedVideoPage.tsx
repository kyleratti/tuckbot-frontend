import * as React from "react";
import { RouteComponentProps } from "react-router";
import EmbedContainer from "../../components/EmbedContainer";
import VideoDisplay from "../../components/VideoDisplay";

export interface EmbedVideoRouteParams {
  redditPostId: string;
}

export interface EmbedVideoProps
  extends RouteComponentProps<EmbedVideoRouteParams> {}

type Props = EmbedVideoProps;
const EmbedVideoPage: React.FunctionComponent<Props & RouteComponentProps> = ({
  match: {
    params: { redditPostId: redditPostId },
  },
}) => (
  <EmbedContainer>
    <VideoDisplay embedded redditPostId={redditPostId} />
  </EmbedContainer>
);
export default EmbedVideoPage;
