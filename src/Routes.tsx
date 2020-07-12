import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import EmbedVideoPage from "./pages/EmbedVideoPage";
import HomePage from "./pages/HomePage";
import RandomPage from "./pages/RandomPage";
import TuckerPage from "./pages/TuckerPage";
import WatchPage from "./pages/WatchPage/WatchPage";
import WatchVideoPage from "./pages/WatchVideoPage";

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />

    <Route path="/contact" exact component={ContactPage} />
    <Route path="/tucker" exact component={TuckerPage} />

    <Route path="/watch" exact component={WatchPage} />
    <Route path="/watch/random" exact component={RandomPage} />
    <Route path="/watch/:redditPostId" exact component={WatchVideoPage} />

    <Route
      path="/embed/random"
      exact
      component={() => <RandomPage embed={true} />}
    />
    <Route path="/embed/:redditPostId" exact component={EmbedVideoPage} />

    <Redirect to="/" />
  </Switch>
);
export default Routes;
