import { Layout } from 'antd';
import React from 'react';
import ReactGA from 'react-ga';
import Loadable, { OptionsWithoutRender } from 'react-loadable';
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
  isMobile?: boolean;
}

const Loading = () => null;
const AoDaiApp = Loadable({
  loader: () => import(/* webpackChunkName: "aodai" */ './AoDai/AoDaiApp'),
  loading: Loading,
} as OptionsWithoutRender<any>);
const AuLacApp = Loadable({
  loader: () => import(/* webpackChunkName: "aulac" */ './AuLac/AuLacApp'),
  loading: Loading,
} as OptionsWithoutRender<any>);
const DogApp = Loadable({
  loader: () => import(/* webpackChunkName: "dog" */ './Dog/DogApp'),
  loading: Loading,
} as OptionsWithoutRender<any>);
const FaceMatchApp = Loadable({
  loader: () => import(/* webpackChunkName: "facematch" */ './FaceMatchApp'),
  loading: Loading,
} as OptionsWithoutRender<any>);
const VietBrailleApp = Loadable({
  loader: () => import(/* webpackChunkName: "vietbraille" */ './VietBrailleApp'),
  loading: Loading,
} as OptionsWithoutRender<any>);

class App extends React.Component<IProps> {
  shouldComponentUpdate(nextProps: IProps) {
    return this.props.isMobile !== nextProps.isMobile;
  }

  public render() {
    const { isMobile } = this.props;
    const StyledContentToUse = isMobile ? StyledContentMobile : StyledContent;
    const wrapper = (Component: any) => () => <Component {...this.props} />;
    return (
      <Layout hasSider={!isMobile}>
        <StyledSider breakpoint="md" collapsedWidth="0" defaultCollapsed={isMobile}>
          <AppNav />
        </StyledSider>
        <StyledContentToUse>
          <Switch>
            <Route exact path="/" component={wrapper(DogApp)} />
            <Route path="/ao-dai" component={wrapper(AoDaiApp)} />
            <Route path="/au-lac" component={AuLacApp} />
            <Route path="/face-match" component={FaceMatchApp} />
            <Route path="/viet-braille" component={VietBrailleApp} />
            <Route path="/year-of-the-cat" component={PageNotFound} />
            <Route path="/year-of-the-dog" component={wrapper(DogApp)} />
            <Route component={PageNotFound} />
          </Switch>
        </StyledContentToUse>
      </Layout>
    );
  }
}

export default withRouter(App);
