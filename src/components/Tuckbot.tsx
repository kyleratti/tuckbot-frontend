import * as React from "react";
import { Redirect } from "react-router";

const TUCKER_PETS = 3;

class Tuckbot extends React.Component {
  state = {
    numClicks: 0
  };

  constructor(props) {
    super(props);

    this.state = { numClicks: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      numClicks: this.state.numClicks + 1
    });
  }

  render() {
    let redirect: React.ReactNode = null;
    if (this.state.numClicks > TUCKER_PETS) {
      redirect = <Redirect push to="/tucker" />;
    }

    return (
      <header>
        {redirect}
        <h1>
          <span id="tuckie-boy" onClick={this.handleClick}>
            🐶
          </span>
          Tuckbot
        </h1>
      </header>
    );
  }
}

export default Tuckbot;
