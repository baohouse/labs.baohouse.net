import { Layout, Spin } from 'antd';
import React, { lazy, Suspense } from 'react';
import ReactGA from 'react-ga';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import configJson from 'config.json';

import AppNav from './AppNav';
import PageNotFound from './PageNotFound';

ReactGA.initialize(configJson.googleAnalyticsTrackingId);

const { Content, Sider } = Layout;

const StyledSider = styled(Sider)`
  background-color: #fff;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 100;
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.05);

  .ant-layout-sider-children {
    overflow-y: auto;
  }
`;

const StyledContent = styled(Content)`
  min-height: 100vh;
  word-break: keep-all;
  padding-left: 200px;
`;

const StyledContentMobile = styled(StyledContent)`
  padding-left: 0;
`;

interface IProps extends RouteComponentProps<any> {
  isMobile?: boolean;
}

const AoDaiApp = lazy(() => import(/* webpackChunkName: "aodai" */ './AoDai/AoDaiApp'));
const AuLacApp = lazy(() => import(/* webpackChunkName: "aulac" */ './AuLac/AuLacApp'));
const DictionariumApp = lazy(() => import(/* webpackChunkName: "aulac" */ './DictionariumApp'));
const DogApp = lazy(() => import(/* webpackChunkName: "dog" */ './Dog/DogApp'));
const FaceMatchApp = lazy(() => import(/* webpackChunkName: "facematch" */ './FaceMatchApp'));
const VietBrailleApp = lazy(() => import(/* webpackChunkName: "vietbraille" */ './VietBrailleApp'));

class App extends React.Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    return this.props.isMobile !== nextProps.isMobile;
  }

  public render() {
    const { isMobile } = this.props;
    const StyledContentToUse = isMobile ? StyledContentMobile : StyledContent;
    const wrapper = (Component: any) => () => (
      <Suspense fallback={<Spin />}>
        <Component {...this.props} />
      </Suspense>
    );
    return (
      <Layout hasSider={!isMobile}>
        <StyledSider breakpoint="md" collapsedWidth="0" defaultCollapsed={isMobile}>
          <AppNav />
        </StyledSider>
        <StyledContentToUse>
          <Switch>
            <Route exact path="/" component={wrapper(DogApp)} />
            <Route path="/ao-dai" component={wrapper(AoDaiApp)} />
            <Route path="/au-lac" component={wrapper(AuLacApp)} />
            <Route path="/dict" component={wrapper(DictionariumApp)} />
            <Route path="/face-match" component={wrapper(FaceMatchApp)} />
            <Route path="/viet-braille" component={wrapper(VietBrailleApp)} />
            <Route path="/year-of-the-cat" component={wrapper(PageNotFound)} />
            <Route path="/year-of-the-dog" component={wrapper(DogApp)} />
            <Route component={PageNotFound} />
          </Switch>
        </StyledContentToUse>
      </Layout>
    );
  }
}

export default withRouter(App);
