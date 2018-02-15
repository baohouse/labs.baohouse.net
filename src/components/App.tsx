
import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import AoDaiApp from "./AoDaiApp";
import AppNav from "./AppNav";
import DogApp from "./DogApp";
import PageNotFound from "./PageNotFound";
import VietBrailleApp from "./VietBrailleApp";

const Body = styled.div`
  background-color: #eee;
  min-height: 100vh;
  padding-top: 50px;
`;

const App = () => (
  <>
    <AppNav />
    <Body>
      <Switch>
        <Route exact path="/" component={DogApp} />
        <Route path="/ao-dai" component={AoDaiApp} />
        <Route path="/viet-braille" component={VietBrailleApp} />
        <Route path="/year-of-the-cat" component={PageNotFound} />
        <Route path="/year-of-the-dog" component={DogApp} />
        <Route component={PageNotFound} />
      </Switch>
    </Body>
  </>
);

export default App;
