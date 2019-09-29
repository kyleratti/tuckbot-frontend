import * as React from "react";
import PageContainer from "../../components/PageContainer";
import TuckerGallery from "./components/TuckerGallery";

const TUCKER_BIRTHDAY = 1456790400;
const TUCKER_BIRTHDAY_DIFF = Math.floor(Date.now() / 1000) - TUCKER_BIRTHDAY;
const TUCKER_AGE = Math.floor(TUCKER_BIRTHDAY_DIFF / (60 * 60 * 24 * 365));

class TuckerPage extends React.Component {
  render() {
    return (
      <PageContainer>
        <h1>Hi there, I'm Tucker!</h1>

        <p>
          You found my page - good human! Not as good of a boy as I am,
          obviously, but still good. I am {TUCKER_AGE} years old. My favorite
          thing to do is to suck on my toy ducks. I have a few ducks - big
          ducks, medium ducks, small ducks, tiny ducks, yellow ducks, green
          ducks, purple ducks, orange ducks, slightly more yellow
          ducks...basically every kind of duck they make. And a few more.
        </p>

        <p>Here's a few pictures of me looking deceivingly cute looking!</p>

        <TuckerGallery />
      </PageContainer>
    );
  }
}
export default TuckerPage;
