import * as React from "react";
import VideoDetails from "./components/VideoDetails";
import VideoPlayer from "./components/VideoPlayer";
import VideoTitle from "./components/VideoTitle";

export interface VideoDetailsProps {
  redditPostId: string;
}

type Props = VideoDetailsProps;

class VideoDisplay extends React.Component<Props> {
  state = {
    error: null,
    isLoaded: false,
    redditPostId: null,
    redditPostTitle: null,
    mirrorUrl: null
  };

  constructor(props) {
    super(props);

    this.state.redditPostId = props.redditPostId;
  }

  componentDidMount() {
    fetch("http://localhost:3002/public/video/" + this.state.redditPostId)
      .then(res => res.json())
      .then(
        result => {
          if (result.status && result.status.status === 200) {
            this.setState({
              redditPostId: result.data.redditPostId,
              redditPostTitle: result.data.redditPostTitle,
              mirrorUrl: result.data.mirrorUrl
            });
          } else {
            this.setState({
              error: {
                message: "Error retrieving video"
              }
            });
          }

          this.setState({
            isLoaded: true
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <VideoTitle title={this.state.redditPostTitle} />
          <VideoPlayer mirrorUrl={this.state.mirrorUrl} />
          <VideoDetails redditPostId={this.state.redditPostId} />
        </React.Fragment>
      );
    }
  }
}

export default VideoDisplay;
