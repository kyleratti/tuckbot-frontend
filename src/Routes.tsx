import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import WatchPage from "./pages/WatchPage/WatchPage";
import WatchVideoPage from "./pages/WatchVideoPage/WatchVideoPage";

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={WatchPage} />

    <Route path="/contact" exact component={ContactPage} />
    <Route path="/me" exact component={ContactPage} />

    <Route path="/watch" exact component={WatchPage} />
    <Route path="/watch/:redditPostId" exact component={WatchVideoPage} />
    <Redirect to="/" />
  </Switch>
);
export default Routes;
