import { Button, Navbar } from "@blueprintjs/core";
import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Home from "./Home";
import PageNotFound from "./PageNotFound";

const Logo = styled.img`
  height: 45px;
`;

const App = () => (
  <>
    <Navbar>
      <Navbar.Group>
        <Navbar.Heading>
          <Link to="/">
            <Logo src="/images/baolabs-logo.svg" alt="BẢOLABS" />
          </Link>
        </Navbar.Heading>
        <Navbar.Divider />
        <Button className="pt-minimal">Anti-Stress Volunteerism</Button>
        <Button className="pt-minimal">ÁoDAI</Button>
        <Button className="pt-minimal">Community Hive Mind</Button>
        <Button className="pt-minimal">Việt Braille</Button>
        <Button className="pt-minimal">ZhongShi❤︎MỵChâu</Button>
      </Navbar.Group>
    </Navbar>
    <Grid fluid>
      <Row>
        <Col xs={true}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={PageNotFound} />
          </Switch>
        </Col>
      </Row>

    </Grid>
  </>
);

export default App;
