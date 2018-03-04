import "antd/dist/antd.css";

import { Layout } from "antd";
import _ from "lodash";
import { observer } from "mobx-react";
import React from "react";
import { ContainerQuery } from "react-container-query";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Breakpoints, { BreakpointsMap, Params } from "constants/Breakpoints";
import FlickrStore from "stores/FlickrStore";

import AoDaiApp from "./AoDai/AoDaiApp";
import AppNav from "./AppNav";
import AuLacApp from "./AuLac/AuLacApp";
import DogApp from "./Dog/DogApp";
import PageNotFound from "./PageNotFound";
import VietBrailleApp from "./VietBrailleApp";

const { Content, Sider } = Layout;

const StyledSider = styled(Sider)`
  background-color: #fff;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 100;

  .ant-layout-sider-children {
    overflow-y: auto;
  }
`;

const StyledContent = styled(Content)`
  background-color: #eee;
  min-height: 100vh;
  word-break: keep-all;
  padding-left: 200px;
`;

const StyledContentMobile = styled(StyledContent)`
  padding-left: 0;
`;

@observer
class App extends React.Component {
  private flickrStore: FlickrStore = new FlickrStore();

  public render() {
    return (
      <ContainerQuery query={BreakpointsMap}>
        {(breakpointsResult: Params) => {
          const isSiderCollapsed: boolean = _.includes(
            [
              Breakpoints.X_SMALL,
              Breakpoints.SMALL,
            ],
            _.findKey(breakpointsResult, (value) => value),
          );
          const StyledContentToUse = isSiderCollapsed ? StyledContentMobile : StyledContent;
          return (
            <Layout>
              <StyledSider breakpoint="md" collapsedWidth="0">
                <AppNav />
              </StyledSider>
              <StyledContentToUse>
                <Switch>
                  <Route exact path="/" component={DogApp} />
                  <Route path="/ao-dai" render={() => (
                    <AoDaiApp flickrStore={this.flickrStore} isSiderCollapsed={isSiderCollapsed} />
                  )} />
                  <Route path="/au-lac" component={AuLacApp} />
                  <Route path="/viet-braille" component={VietBrailleApp} />
                  <Route path="/year-of-the-cat" component={PageNotFound} />
                  <Route path="/year-of-the-dog" component={DogApp} />
                  <Route component={PageNotFound} />
                </Switch>
              </StyledContentToUse>
            </Layout>
          );
        }}
      </ContainerQuery>
    );
  }
}

export default App;
