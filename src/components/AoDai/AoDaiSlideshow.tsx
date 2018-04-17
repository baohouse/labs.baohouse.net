import React from "react";
import CrossfadeImage from "react-crossfade-image";
import styled from "styled-components";

import Flickr from "models/Flickr";

import AoDaiMask from "./AoDaiMask";

const PrefetchedImage = styled.img`
  display: none;
`;

export interface IProps {
  photos: Flickr.Photo[];
}

export interface IState {
  index: number;
}

// Assuming 4/4 time signature
const BPM = 90;
const BEAT_DURATION = 60000 / BPM;

export default class AoDaiSlideshow extends React.Component<IProps, IState> {
  private switchIndex?: number;

  constructor(props: IProps) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  public componentDidMount() {
    this.switchIndex = window.setInterval(() => {
      const { index } = this.state;
      const newIndex = index < this.props.photos.length - 1 ? index + 1 : 0;
      this.setState({ index: newIndex });
    }, BEAT_DURATION * 4);
  }

  public componentWillReceiveProps() {
    // When we get new set of photos, reset the index
    this.setState({ index: 0 });
  }

  public componentWillUnmount() {
    clearInterval(this.switchIndex);
  }

  public render() {
    const { photos = [] } = this.props;
    const { index } = this.state;
    const url = (photos[index] || {}).url_c || "";
    const nextUrl = (index + 1 < photos.length ? (photos[index + 1] || {}).url_c : (photos[0] || {}).url_c) || "";

    return (
      <>
        <AoDaiMask lazyload={false} viewsize="large">
          <CrossfadeImage duration={BEAT_DURATION} src={url} />
        </AoDaiMask>
        <PrefetchedImage src={nextUrl} />
      </>
    );
  }
}
