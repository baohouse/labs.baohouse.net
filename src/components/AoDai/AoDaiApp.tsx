import { Icon, Input, Spin } from "antd";
import { bind } from "decko";
import { observer } from "mobx-react";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import { HEADER_HEIGHT_UNIT, HEADER_HEIGHT_VALUE } from "AppConstants";
import FlickrStore from "stores/FlickrStore";
import AoDaiMaskedPhoto from "./AoDaiMaskedPhoto";

import AoDaiMask from "ao-dai-mask.svg";

const Container = styled.div`
  background-color: #eee;
  padding-top: 42px;
`;

const SearchBarContainer = styled.div`
  position: fixed;
  top: ${HEADER_HEIGHT_VALUE + 5}${HEADER_HEIGHT_UNIT};
  left: 5px;
  right: 5px;
  z-index: 15;
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
  min-height: calc(100vh - ${2 * HEADER_HEIGHT_VALUE + 5}${HEADER_HEIGHT_UNIT});
`;

const PhotoSet = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`;

@observer
class Home extends React.Component {

  private flickrStore: FlickrStore = new FlickrStore();

  public componentWillMount() {
    this.flickrStore.getInterestingPhotos();
  }

  public render() {
    const { isLoading, photos } = this.flickrStore;
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
          <SearchBarContainer>
            <Input.Search
              disabled={isLoading}
              enterButton={searchIcon}
              placeholder="Filter images by searchable text"
              onSearch={this.search}
            />
          </SearchBarContainer>
          {body}
          <div dangerouslySetInnerHTML={{ __html: AoDaiMask }} />
        </Container>
      </>
    );
  }

  @bind
  private search(text: string) {
    if (text) {
      this.flickrStore.searchPhotosByText(text)
        .then(() => window.scrollTo(0, 0));
    } else {
      this.flickrStore.getInterestingPhotos()
        .then(() => window.scrollTo(0, 0));
    }
  }
}

export default Home;
