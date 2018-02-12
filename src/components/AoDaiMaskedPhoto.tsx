import { Card, Elevation } from "@blueprintjs/core";
import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";

import Flickr from "models/Flickr";

const ClippedCard = styled(Card)`
  overflow: hidden;
  width: 240px;
  height: 640px;
  margin: 2vw;
`;

/**
 * The width and height have to be 1:1, otherwise
 * the clip-path gets distorted.
 */
const ImageMask = styled.div`
  clip-path: url(#mask);
  width: 600px;
  height: 600px;
`;

/**
 * And the image needs to stretch to the ImageMask container.
 */
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export type Photo = (props: Flickr.Photo) => JSX.Element;

const Photo: Photo = ({ id, height_c, title, url_c }) => (
  <ClippedCard elevation={Elevation.TWO}>
    <ImageMask>
      <LazyLoad height={height_c} offset={100} once>
        <Image alt={title} src={url_c}/>
      </LazyLoad>
    </ImageMask>
  </ClippedCard>
);

export default Photo;
