import React from "react";
import { Route, Switch } from "react-router-dom";

import s from "styles/app.style";
import Breadcrumbs from "./Breadcrumbs";
import Home from "./Home";
import PageNotFound from "./PageNotFound";

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>
        <img src="/images/baolabs-logo.svg" alt="BẢOLABS"/>
      </h1>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
