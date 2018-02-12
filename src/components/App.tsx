import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Link, Route, Switch } from "react-router-dom";

import Home from "./Home";
import PageNotFound from "./PageNotFound";

const App = () => (
  <Grid fluid>

    <Row>
      <Col xs={1}>
        <Link to="/">
          <img src="/images/baolabs-logo.svg" alt="BẢOLABS" style={{marginTop: "2vh"}} />
        </Link>
      </Col>
    </Row>

    <Row>
      <Col xs={true}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={PageNotFound} />
        </Switch>
      </Col>
    </Row>

  </Grid>
);

export default App;
