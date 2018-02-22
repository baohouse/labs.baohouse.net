import "antd/dist/antd.css";

import { Layout } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import { HEADER_HEIGHT, HEADER_HEIGHT_UNIT, HEADER_HEIGHT_VALUE } from "AppConstants";
import AoDaiApp from "./AoDai/AoDaiApp";
import AppNav from "./AppNav";
import AuLacApp from "./AuLac/AuLacApp";
import DogApp from "./Dog/DogApp";
import PageNotFound from "./PageNotFound";
import VietBrailleApp from "./VietBrailleApp";

const { Content, Header } = Layout;

const StyleHeader = styled(Header)`
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: ${HEADER_HEIGHT_VALUE + 1}${HEADER_HEIGHT_UNIT};
  z-index: 5;
`;

const StyledContent = styled(Content)`
  padding-top: ${HEADER_HEIGHT};
  background-color: #eee;
  min-height: 100vh;
  word-break: keep-all;
`;

const App = () => (
  <>
    <Layout>
      <StyleHeader>
        <AppNav />
      </StyleHeader>
      <StyledContent>
        <Switch>
          <Route exact path="/" component={DogApp} />
          <Route path="/ao-dai" component={AoDaiApp} />
          <Route path="/au-lac" component={AuLacApp} />
          <Route path="/viet-braille" component={VietBrailleApp} />
          <Route path="/year-of-the-cat" component={PageNotFound} />
          <Route path="/year-of-the-dog" component={DogApp} />
          <Route component={PageNotFound} />
        </Switch>
      </StyledContent>
    </Layout>
  </>
);

export default App;
