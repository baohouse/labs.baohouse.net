import { Icon, Input, Spin } from "antd";
import { Location, LocationListener, UnregisterCallback } from "history";
import { observer } from "mobx-react";
import React from "react";
import { Helmet } from "react-helmet";
import { RouteComponentProps, withRouter } from "react-router-dom";
import styled from "styled-components";

import FlickrStore from "stores/FlickrStore";

import AoDaiMaskedPhoto from "./AoDaiMaskedPhoto";

import AoDaiMask from "./ao-dai-mask.svg";

export interface IContainerProps {
  isLoading: boolean;
}
const Container = styled.div`
  background-color: #eee;
  padding-top: 42px;
  transition: opacity 1s ease;
  opacity: ${({ isLoading }: IContainerProps) => isLoading ? "0.5" : "1"};
`;

const SearchBarContainer = styled.div`
  position: fixed;
  top: 5px;
  left: 205px;
  right: 5px;
  z-index: 15;
`;

const SearchBarContainerMobile = styled(SearchBarContainer)`
  left: 5px;
`;

const SearchSpinner = styled<any, any>(Spin)`
  .ant-spin-dot i {
    background-color: #fff;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 42px);
`;

const PhotoSet = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

export interface IProps extends RouteComponentProps<any> {
  flickrStore: FlickrStore;
  isMobile: boolean;
}

export interface IState {
  text: string;
}

@observer
class AoDaiApp extends React.Component<IProps, IState> {

  private unlistener?: UnregisterCallback;

  constructor(props: IProps) {
    super(props);

    const text = this.getQueryStringText(props.location);
    this.state = { text };
  }

  public componentDidMount() {
    const { history } = this.props;
    this.unlistener = history.listen(this.locationHandler);
    this.search(this.state.text);
  }

  public componentWillUnmount() {
    if (this.unlistener) {
      this.unlistener();
    }
  }

  public shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    return (
      this.props.flickrStore.isLoading !== nextProps.flickrStore.isLoading ||
      this.props.flickrStore.text !== nextProps.flickrStore.text ||
      this.props.isMobile !== nextProps.isMobile ||
      this.state.text !== nextState.text
    );
  }

  public render() {
    const { flickrStore, isMobile } = this.props;
    const { isLoading, photos } = flickrStore;
    let body;
    let searchIcon = <Icon type="search" />;

    if (photos.length) {
      body = (
        <PhotoSet>
          {photos.map((photo) => <AoDaiMaskedPhoto key={photo.id} {...photo} />)}
        </PhotoSet>
      );
      if (isLoading) {
        searchIcon = <SearchSpinner size="small" />;
      }
    } else if (isLoading) {
      body = (
        <SpinnerContainer>
          <Spin size="large" />
        </SpinnerContainer>
      );
    }

    const SearchBarContainerToUse = isMobile ? SearchBarContainerMobile : SearchBarContainer;

    return (
      <>
        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="BẢOLABS – ÁoDAI" />
          <meta property="og:url" content="http://labs.baohouse.net/ao-dai" />
          <meta property="og:image" content="http://labs.baohouse.net/images/ao-dai-app.thumb.png" />
          <title>BẢOLABS – ÁoDAI</title>
        </Helmet>
        <Container isLoading={isLoading}>
          <SearchBarContainerToUse>
            <Input.Search
              onChange={this.searchValueHandler}
              disabled={isLoading}
              enterButton={searchIcon}
              placeholder="Filter images by searchable text"
              onSearch={this.searchHandler}
              value={this.state.text}
            />
          </SearchBarContainerToUse>
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

  private locationHandler: LocationListener = (location: Location) => {
    const text = this.getQueryStringText(location);
    this.setState({ text });
    this.search(text);
  }

  private searchValueHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const text = (event.target as HTMLInputElement).value;
    this.setState({ text });
  }

  private searchHandler = (text: string = "") => {
    this.props.history.push({ search: `?q=${text}` });
  }

  private search = (text: string = "") => {
    if (this.props.flickrStore.text === text) {
      return;
    }

    if (text) {
      this.props.flickrStore.searchPhotosByText(text)
        .then(() => window.scrollTo(0, 0));
    } else {
      this.props.flickrStore.getInterestingPhotos()
        .then(() => window.scrollTo(0, 0));
    }
  }
}

export default withRouter(AoDaiApp);
