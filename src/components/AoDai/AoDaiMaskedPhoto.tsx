import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";
import styledTs from "styled-components-ts";

import Flickr from "models/Flickr";

import AoDai from "./ao-dai.svg";

const CONTAINER_SIZE = 540;

const Container = styled.div`
  overflow: hidden;
  width: 180px;
  height: ${CONTAINER_SIZE}px;
  position: relative;
  margin: 10px;
`;

interface IPropsAoDaiOverlay {
  hairColor: string;
}

const AoDaiOverlay = styledTs<IPropsAoDaiOverlay>(styled.div)`
  position: absolute;
  z-index: 1;
  top: -10px;
  left: -11px;

  svg {
    width: 200px;
    height: 563px;

    .hair path,
    .brow {
      fill: ${({ hairColor }: IPropsAoDaiOverlay) => hairColor}
    }
  }
`;

/**
 * The width and height have to be 1:1, otherwise
 * the clip-path gets distorted.
 */
const ImageMask = styled.div`
  clip-path: url(#mask);
  width: ${CONTAINER_SIZE - 4}px;
  height: ${CONTAINER_SIZE}px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
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

/**
 * @see http://www.collectedwebs.com/art/colors/hair/
 */
const hairColors = [
  "#090806", // Black
  "#2C222B", // Off Black
  "#71635A", // Dark Gray
  "#B7A69E", // Medium Gray
  "#D6C4C2", // Light Gray
  "#CABFB1", // Platinum Blonde
  "#DCD0BA", // Bleached Blonde
  /**
   * Disabling because it clashes with current skin tone.
   * TODO: Add skin tone randomizer
   */
  // "#FFF5E1", // White Blonde
  "#E6CEA8", // Light Blonde
  "#E5C8A8", // Golden Blonde
  "#DEBC99", // Ash Blonde
  "#B89778", // Honey Blonde
  "#A56B46", // Strawberry Blonde
  "#B55239", // Light Red
  "#8D4A43", // Dark Red
  "#91553D", // Light Auburn
  "#533D32", // Dark Auburn
  "#3B3024", // Dark Brown
  "#554838", // Golden Brown
  "#4E433F", // Medium Brown
  "#504444", // Chestnut Brown
  "#6A4E42", // Brown
  "#A7856A", // Light Brown
  "#977961", // Ash Brown
];

class AoDaiMaskedPhoto extends React.Component<Flickr.Photo> {
  public shouldComponentUpdate(nextProps: Flickr.Photo) {
    return this.props.id !== nextProps.id;
  }

  public render() {
    const { title, url_c } = this.props;
    const hairColor: string = hairColors[this.deriveIndex()];
    return (
      <Container>
        <AoDaiOverlay
          hairColor={hairColor}
          dangerouslySetInnerHTML={{ __html: AoDai }}
        />
        <ImageMask>
          <LazyLoad height={CONTAINER_SIZE} offset={100} once>
            <Photo alt={title} src={url_c} />
          </LazyLoad>
        </ImageMask>
      </Container>
    );
  }

  private deriveIndex = (): number => parseInt(this.props.id, 10) % hairColors.length;
}

export default AoDaiMaskedPhoto;
