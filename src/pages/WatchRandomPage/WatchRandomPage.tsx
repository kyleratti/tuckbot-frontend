import * as React from "react";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import PageContainer from "../../components/PageContainer";
import { useRedditVideo } from "../../services/video/hooks";

const WatchRandomPage: React.FunctionComponent = () => {
  const { videoResponse, errorMessage } = useRedditVideo("random");
  const history = useHistory();

  if (errorMessage) {
    return <PageContainer>Error: {errorMessage}</PageContainer>;
  } else if (!videoResponse) {
    return (
      <PageContainer>
        <Loading>Loading random video, please wait...</Loading>
      </PageContainer>
    );
  } else {
    setTimeout(() => {
      history.replace(`/watch/${videoResponse.redditPostId}`);
    }, 0);

    return <div>Redirecting</div>;
  }
};

export default WatchRandomPage;
