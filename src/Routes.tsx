import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RedirectExternal from "./components/RedirectExternal";
import { config } from "./config";
import AdminDashboardPage from "./pages/Admin/DashboardPage";
import AdminLoginPage from "./pages/Admin/LoginPage";
import AdminLogoutPage from "./pages/Admin/LogoutPage";
import AdminReceiveTokenPage from "./pages/Admin/ReceiveTokenPage";
import AdminVideosPage from "./pages/Admin/VideosPage";
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

    {/* BEGIN: Admin Routes */}
    <Route
      path="/admin"
      exact
      render={() => <Redirect to="/admin/dashboard" />}
    />
    <Route path="/admin/dashboard" exact component={AdminDashboardPage} />
    <Route path="/admin/videos" exact component={AdminVideosPage} />

    <Route path="/admin/login" exact component={AdminLoginPage} />
    <Route
      path="/admin/login/handoff"
      exact
      render={() => (
        <RedirectExternal
          to={`${config.tuckbot.api.url}/v2/admin/login/handoff`}
        />
      )}
    />
    <Route path="/admin/login/token/:token" component={AdminReceiveTokenPage} />
    <Route path="/admin/logout" exact component={AdminLogoutPage} />
    {/* END: Admin Routes */}

    <Redirect to="/" />
  </Switch>
);
export default Routes;
