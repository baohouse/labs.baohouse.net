import { Spinner } from "@blueprintjs/core";
import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

import AoDaiMaskedPhoto from "components/AoDaiMaskedPhoto";
import FlickrStore from "stores/FlickrStore";

import AoDaiMask from "ao-dai-mask.svg";

const Container = styled.div`
  background-color: #eee;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 50px);
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
    const { photos } = this.flickrStore;

    return (
      <Container>
        {
          photos.length
            ? (
              <PhotoSet>
                {photos.map((photo) => <AoDaiMaskedPhoto key={photo.id} {...photo} />)}
              </PhotoSet>
            )
            : (
              <SpinnerContainer>
                <Spinner/>
              </SpinnerContainer>
            )
        }
        <div dangerouslySetInnerHTML={{ __html: AoDaiMask }} />
      </Container>
    );
  }
}

export default Home;
