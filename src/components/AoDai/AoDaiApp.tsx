import { Spin } from "antd";
import { Location, LocationListener, UnregisterCallback } from "history";
import { observer } from "mobx-react";
import React from "react";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";
import styledTs from "styled-components-ts";

import FlickrStore from "stores/FlickrStore";

import AoDaiMaskedPhoto from "./AoDaiMaskedPhoto";
import AoDaiSearchBar from "./AoDaiSearchBar";

import AoDaiMask from "./ao-dai-mask.svg";

export interface IContainerProps {
  isLoading: boolean;
}
const Container = styled.div`
  background-color: #888;
  padding-top: 42px;
  transition: opacity 1s ease;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 42px);

  .ant-spin-dot i {
    background-color: #fff;
  }
`;

const PhotoSet = styledTs<IContainerProps>(styled.div)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  opacity: ${({ isLoading }: IContainerProps) => isLoading ? "0.5" : "1"};
`;

export interface IProps extends RouteComponentProps<any> {
  flickrStore: FlickrStore;
  isMobile: boolean;
}

@observer
class AoDaiApp extends React.Component<IProps> {

  private unlistener?: UnregisterCallback;

  public componentDidMount() {
    const { history, location } = this.props;
    this.unlistener = history.listen(this.locationHandler);
    const text = this.getQueryStringText(location);
    this.search(text);
  }

  public componentWillUnmount() {
    if (this.unlistener) {
      this.unlistener();
    }
  }

  public render() {
    const { flickrStore, history, isMobile } = this.props;
    const { isLoading, photos } = flickrStore;
    const isBusy = photos.length ? isLoading : false;
    let body;

    if (photos.length) {
      body = (
        <PhotoSet isLoading={isLoading}>
          {photos.map((photo) => <AoDaiMaskedPhoto key={photo.id + photo.owner} {...photo} />)}
        </PhotoSet>
      );
    } else if (isLoading) {
      body = (
        <SpinnerContainer>
          <Spin size="large" />
        </SpinnerContainer>
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
          <AoDaiSearchBar
            history={history}
            isBusy={isBusy}
            isMobile={isMobile}
            text={flickrStore.text}
          />
          {body}
          <div dangerouslySetInnerHTML={{ __html: AoDaiMask }} />
        </Container>
      </>
    );
  }

  private getQueryStringText = (location: Location): string => {
    const params = new URLSearchParams(location.search);
    const text = params.get("q") || "";
    return text;
  }

  private locationHandler: LocationListener = async (location: Location): Promise<void> => {
    const text = this.getQueryStringText(location);
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
}

export default withRouter(AoDaiApp);
