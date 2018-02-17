import { Icon, Spinner } from "@blueprintjs/core";
import { bind } from "decko";
import { observer } from "mobx-react";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import FlickrStore from "stores/FlickrStore";
import AoDaiMaskedPhoto from "./AoDaiMaskedPhoto";

import AoDaiMask from "ao-dai-mask.svg";

const Container = styled.div`
  background-color: #eee;
  padding-top: 40px;
`;

const SearchBar = styled.div`
  position: fixed;
  top: 60px;
  left: 10px;
  right: 10px;
  z-index: 15;
`;

const SearchInput = styled.input`
  background-color: rgba(255, 255, 255, 0.9);
`;

const SearchSpinner = styled(Spinner)`
  transform: translate(-2px, -4px);
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
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
    let searchIcon = <Icon icon="search" />;

    if (photos.length) {
      body = (
        <PhotoSet>
          {photos.map((photo) => <AoDaiMaskedPhoto key={photo.id} {...photo} />)}
        </PhotoSet>
      );
      if (isLoading) {
        searchIcon = <SearchSpinner className="pt-icon pt-small" />;
      }
    } else if (isLoading) {
      body = (
        <SpinnerContainer>
          <Spinner className="pt-large" />
        </SpinnerContainer>
      );
    }

    return (
      <>
        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="ÁoDAI" />
          <meta property="og:url" content="http://labs.baohouse.net/ao-dai" />
          <meta property="og:image" content="http://labs.baohouse.net/images/ao-dai-app.thumb.png" />
        </Helmet>
        <Container>
          <SearchBar className="pt-input-group">
            {searchIcon}
            <SearchInput
              type="search"
              placeholder="Type search text and press ENTER"
              className="pt-input"
              dir="auto"
              onKeyUp={this.search}
            />
          </SearchBar>
          {body}
          <div dangerouslySetInnerHTML={{ __html: AoDaiMask }} />
        </Container>
      </>
    );
  }

  @bind
  private search(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode === 13) {
      const text = event.currentTarget.value;
      if (text) {
        this.flickrStore.searchPhotosByText(text)
          .then(() => window.scrollTo(0, 0));
      } else {
        this.flickrStore.getInterestingPhotos()
          .then(() => window.scrollTo(0, 0));
      }
    }
  }
}

export default Home;
