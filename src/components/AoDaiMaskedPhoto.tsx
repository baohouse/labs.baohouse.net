import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";

import Flickr from "models/Flickr";

const Container = styled.div`
  overflow: hidden;
  width: 180px;
  height: 540px;
  position: relative;
  margin: 10px;
`;

const AoDaiOverlay = styled.img`
  height: 564px;
  position: absolute;
  z-index: 1;
  top: -11px;
  left: -4px;
`;

/**
 * The width and height have to be 1:1, otherwise
 * the clip-path gets distorted.
 */
const ImageMask = styled.div`
  clip-path: url(#mask);
  width: 540px;
  height: 540px;
  position: absolute;
  top: 0;
  left: 0;
`;

/**
 * And the image needs to stretch to the ImageMask container.
 */
const Photo = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  margin-left: -190px;
  filter: saturate(2);
`;

export type AoDaiMaskedPhoto = (props: Flickr.Photo) => JSX.Element;

const AoDaiMaskedPhoto: AoDaiMaskedPhoto = ({ id, height_c, title, url_c }) => (
  <Container>
    <AoDaiOverlay src="images/ao-dai.svg"/>
    <ImageMask>
      <LazyLoad height={height_c} offset={100} once>
        <Photo alt={title} src={url_c}/>
      </LazyLoad>
    </ImageMask>
  </Container>
);

export default AoDaiMaskedPhoto;
