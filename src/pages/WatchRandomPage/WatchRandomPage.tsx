import * as React from "react";
import { useHistory } from "react-router-dom";
import { useRedditVideo } from "../../services/video/hooks";

const WatchRandomPage: React.FunctionComponent = () => {
  const { videoResponse, errorMessage } = useRedditVideo("random");
  const history = useHistory();

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  } else if (!videoResponse) {
    return <div>Loading</div>;
  } else {
    setTimeout(() => {
      history.replace(`/watch/${videoResponse.redditPostId}`);
    }, 0);

    return <div>Redirecting</div>;
  }
};

export default WatchRandomPage;
