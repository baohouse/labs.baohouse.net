import { Icon, Input, Spin } from "antd";
import { observer } from "mobx-react";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import FlickrStore from "stores/FlickrStore";

import AoDaiMaskedPhoto from "./AoDaiMaskedPhoto";

import AoDaiMask from "./ao-dai-mask.svg";

const Container = styled.div`
  background-color: #eee;
  padding-top: 42px;
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

export interface IProps {
  flickrStore: FlickrStore;
  isMobile: boolean;
}

@observer
class Home extends React.Component<IProps> {
  public componentWillMount() {
    if (this.props.flickrStore.photos.length === 0) {
      this.search();
    }
  }

  public shouldComponentUpdate(nextProps: IProps) {
    return (
      this.props.flickrStore.isLoading !== nextProps.flickrStore.isLoading ||
      this.props.isMobile !== nextProps.isMobile
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
        <Container>
          <SearchBarContainerToUse>
            <Input.Search
              disabled={isLoading}
              enterButton={searchIcon}
              placeholder="Filter images by searchable text"
              onSearch={this.search}
            />
          </SearchBarContainerToUse>
          {body}
          <div dangerouslySetInnerHTML={{ __html: AoDaiMask }} />
        </Container>
      </>
    );
  }

  private search = (text?: string) => {
    if (text) {
      this.props.flickrStore.searchPhotosByText(text)
        .then(() => window.scrollTo(0, 0));
    } else {
      this.props.flickrStore.getInterestingPhotos()
        .then(() => window.scrollTo(0, 0));
    }
  }
}

export default Home;
