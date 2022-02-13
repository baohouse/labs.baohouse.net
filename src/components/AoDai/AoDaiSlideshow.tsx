import React, { useEffect, useState } from 'react';

import AoDaiMask from './AoDaiMask';
import CrossfadeImage from 'react-crossfade-image';
import type { FC } from 'react';
import Flickr from 'models/Flickr';
import styled from 'styled-components';

const PrefetchedImage = styled.img`
  display: none;
`;

export interface IProps {
  isPlaying: boolean;
  photos: Flickr.Photo[];
}

// Assuming 4/4 time signature
const BPM = 90;
const BEAT_DURATION = 60000 / BPM;

const AoDaiSlideshow: FC<IProps> = ({ isPlaying, photos = [] }) => {
  const [index, setIndex] = useState<number>(0);
  const url = photos[index]?.url_c || '';
  const nextUrl = photos[index + 1 < photos.length ? index + 1 : 0]?.url_c || '';

  useEffect(() => {
    setIndex(0);
  }, [photos]);

  useEffect(() => {
    const switchIndex = window.setTimeout(() => {
      if (isPlaying) {
        const nextIndex = index < photos.length - 1 ? index + 1 : 0;
        setIndex(nextIndex);
      }
    }, BEAT_DURATION * 4);

    return () => {
      window.clearTimeout(switchIndex);
    };
  }, [index, isPlaying, photos]);

  return (
    <>
      <AoDaiMask lazyload={false} viewsize="large">
        <CrossfadeImage duration={BEAT_DURATION} src={url} />
      </AoDaiMask>
      <PrefetchedImage src={nextUrl} />
    </>
  );
};

export default AoDaiSlideshow;
