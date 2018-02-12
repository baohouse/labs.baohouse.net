import { Button, Navbar } from "@blueprintjs/core";
import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import { Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import AoDai from "./AoDai";
import PageNotFound from "./PageNotFound";

const Logo = styled.img`
  height: 45px;
`;

const StyledGrid = styled(Grid)`
  background-color: #eee;
  min-height: calc(100vh - 50px);
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
        <Button disabled className="pt-minimal">Anti-Stress Volunteerism</Button>
        <Link to="/ao-dai" role="button" className="pt-button pt-minimal">
          ÁoDAI
        </Link>
        <Button disabled className="pt-minimal">Community Hive Mind</Button>
        <Button disabled className="pt-minimal">Việt Braille</Button>
        <Button disabled className="pt-minimal">ZhongShi❤︎MỵChâu</Button>
      </Navbar.Group>
    </Navbar>
    <StyledGrid fluid>
      <Row>
        <Col xs={true}>
          <Switch>
            <Route exact path="/" component={AoDai} />
            <Route path="/ao-dai" component={AoDai} />
            <Route component={PageNotFound} />
          </Switch>
        </Col>
      </Row>
    </StyledGrid>
  </>
);

export default App;
