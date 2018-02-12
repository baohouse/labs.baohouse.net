import { observer } from "mobx-react";
import React from "react";
import styled from "styled-components";

import AoDaiMaskedPhoto from "components/AoDaiMaskedPhoto";
import FlickrStore from "stores/FlickrStore";

import AoDaiMask from "ao-dai-mask.svg";

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
      <div>
        <PhotoSet>
          {photos.map((photo) => <AoDaiMaskedPhoto key={photo.id} {...photo}/>)}
        </PhotoSet>
        <div dangerouslySetInnerHTML={{__html: AoDaiMask}}/>
      </div>
    );
  }
}

export default Home;
