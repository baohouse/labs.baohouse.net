import "antd/dist/antd.css";

import { Layout } from "antd";
import { observer } from "mobx-react";
import React from "react";
import Loadable from "react-loadable";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";
import styled from "styled-components";

import FaceCognitionStore from "stores/FaceCognitionStore";
import FlickrStore from "stores/FlickrStore";

import AppNav from "./AppNav";
import PageNotFound from "./PageNotFound";

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

interface IProps extends RouteComponentProps<any> {
  isMobile: boolean;
}

const Loading = () => <div/>;
const AoDaiApp = Loadable({
  loader: () => import(/* webpackChunkName: "aodai" */ "./AoDai/AoDaiApp"),
  loading: Loading,
});
const AuLacApp = Loadable({
  loader: () => import(/* webpackChunkName: "aulac" */ "./AuLac/AuLacApp"),
  loading: Loading,
});
const DogApp = Loadable({
  loader: () => import(/* webpackChunkName: "dog" */ "./Dog/DogApp"),
  loading: Loading,
});
const FaceMatchApp = Loadable({
  loader: () => import(/* webpackChunkName: "facematch" */ "./FaceMatchApp"),
  loading: Loading,
});
const VietBrailleApp = Loadable({
  loader: () => import(/* webpackChunkName: "vietbraille" */ "./VietBrailleApp"),
  loading: Loading,
});

@observer
class App extends React.Component<IProps> {
  private faceCognitionStore: FaceCognitionStore = new FaceCognitionStore();
  private flickrStore: FlickrStore = new FlickrStore();

  public render() {
    const { isMobile } = this.props;
    const StyledContentToUse = isMobile ? StyledContentMobile : StyledContent;
    return (
      <Layout>
        <StyledSider breakpoint="md" collapsedWidth="0">
          <AppNav />
        </StyledSider>
        <StyledContentToUse>
          <Switch>
            <Route exact path="/" component={DogApp} />
            <Route path="/ao-dai" component={() => (
              <AoDaiApp flickrStore={this.flickrStore} isMobile={isMobile} />
            )} />
            <Route path="/au-lac" component={AuLacApp} />
            <Route path="/face-match" component={() => (
              <FaceMatchApp faceCognitionStore={this.faceCognitionStore} />
            )} />
            <Route path="/viet-braille" component={VietBrailleApp} />
            <Route path="/year-of-the-cat" component={PageNotFound} />
            <Route path="/year-of-the-dog" component={DogApp} />
            <Route component={PageNotFound} />
          </Switch>
        </StyledContentToUse>
      </Layout>
    );
  }
}

export default withRouter(App);
