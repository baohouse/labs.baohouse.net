import { BackTop, Spin } from "antd";
import { Location, LocationListener, UnregisterCallback } from "history";
import { observer } from "mobx-react";
import React from "react";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";
import styledTs from "styled-components-ts";

import FlickrStore from "stores/FlickrStore";

import AoDaiMaskedPhoto from "./AoDaiMaskedPhoto";
import AoDaiNav from "./AoDaiNav";
import { SEARCH_TEXT, VIEW_MODE } from "./AoDaiQueryStringParams";
import AoDaiSlideshow from "./AoDaiSlideshow";

import AoDaiMask from "./ao-dai-mask.svg";

export interface IContainerProps {
  isLoading: boolean;
  mode?: string;
}
const Container = styled.div`
  background-color: #444;
  transition: opacity 1s ease;
  min-height: 100vh;
  padding-top: 42px;
`;

const Results = styledTs<IContainerProps>(styled.div)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  opacity: ${({ isLoading }: IContainerProps) => isLoading ? "0.5" : "1"};
  min-height: calc(100vh - 42px);
`;

const Spinner = styledTs(Results.extend)`
  align-items: center;
  .ant-spin-dot i {
    background-color: #fff;
  }
`;

export interface IProps extends RouteComponentProps<any> {
  flickrStore: FlickrStore;
  isMobile: boolean;
}

export interface IState {
  mode: string;
}

@observer
class AoDaiApp extends React.Component<IProps, IState> {

  private unlistener?: UnregisterCallback;

  constructor(props: IProps) {
    super(props);
    const params = new URLSearchParams(location.search);
    this.state = {
      mode: params.get(VIEW_MODE) || "grid",
    };
  }

  public componentDidMount() {
    const { history, location } = this.props;
    this.unlistener = history.listen(this.locationHandler);
    const params = new URLSearchParams(location.search);
    this.search(params.get(SEARCH_TEXT) || "");
  }

  public componentWillUnmount() {
    if (this.unlistener) {
      this.unlistener();
    }
  }

  public render() {
    const { flickrStore, history, isMobile } = this.props;
    const { mode } = this.state;
    const { isLoading, photos } = flickrStore;
    let body;

    if (isLoading && photos.length === 0) {
      body = (
        <Spinner>
          <Spin size="large" />
        </Spinner>
      );
    } else if (mode === "grid") {
      body = (
        <Results isLoading={isLoading}>
          {photos.map((photo) => <AoDaiMaskedPhoto key={`${photo.id}-${photo.owner}`} {...photo} />)}
        </Results>
      );
    } else if (photos.length) {
      body = (
        <Results isLoading={isLoading}>
          <AoDaiSlideshow photos={photos} />
        </Results>
      );
    }

    return (
      <>
        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="BẢOLABS – ÁoDAI" />
          <meta property="og:url" content="http://labs.baohouse.net/ao-dai" />
          <meta property="og:image" content="http://labs.baohouse.net/images/ao-dai-app.thumb.png" />
          <title>BẢOLABS – ÁoDAI</title>
        </Helmet>
        <Container>
          <AoDaiNav
            history={history}
            location={location}
            isBusy={isLoading}
            isMobile={isMobile}
            mode={mode}
            viewModeHandler={this.setViewMode}
          />
          <BackTop />
          {body}
          <div dangerouslySetInnerHTML={{ __html: AoDaiMask }} style={{ height: 0 }} />
        </Container>
      </>
    );
  }

  private locationHandler: LocationListener = async (location: Location): Promise<void> => {
    const params = new URLSearchParams(location.search);
    const mode = params.get(VIEW_MODE) || "";
    this.setState({ mode });
    const text = params.get(SEARCH_TEXT) || "";
    await this.search(text);
  }

  private search = async (text: string = ""): Promise<void> => {
    const { flickrStore } = this.props;
    if (flickrStore.text === text) {
      return;
    }
    if (text) {
      await flickrStore.searchPhotosByText(text);
    } else {
      await flickrStore.getInterestingPhotos();
    }
    window.scrollTo(0, 0);
  }

  private setViewMode = (mode: string): void => {
    const params = new URLSearchParams(this.props.location.search);
    if (params.get(VIEW_MODE) !== mode) {
      params.set(VIEW_MODE, mode);
      this.props.history.push({ search: `?${params.toString()}` });
    }
  }
}

export default withRouter(AoDaiApp);
