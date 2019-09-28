import * as React from "react";
import { RouteComponentProps } from "react-router";
import VideoDisplay from "../../components/VideoDisplay";
import RedirectIfNotFound from "../../components/RedirectIfNotFound";
import PageContainer from "../../components/PageContainer";

export interface WatchVideoRouteParams {
  redditPostId: string;
}

export interface WatchVideoProps
  extends RouteComponentProps<WatchVideoRouteParams> {}

type Props = WatchVideoProps;
const WatchVideoPage: React.FunctionComponent<Props & RouteComponentProps> = ({
  match: {
    params: { redditPostId: redditPostId }
  }
}) => (
  <PageContainer>
    <React.Fragment>
      <VideoDisplay redditPostId={redditPostId} />
    </React.Fragment>
  </PageContainer>
  // <AbstractGameObject gameObjectId={Number(redditPostId)}>
  //   {({ redditPostId }) => (
  //     <React.Fragment>
  //       <RedirectIfNoSave />

  //       {redditPostId === "Minion" && (
  //         <DuplicantEditor gameObjectId={Number(redditPostId)} />
  //       )}
  //       {redditPostId !== "Minion" && <DuplicantNotFound />}
  //     </React.Fragment>
  //   )}
  // </AbstractGameObject>
);
export default WatchVideoPage;
