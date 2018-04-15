import React from "react";
import LazyLoad from "react-lazyload";
import styled from "styled-components";
import styledTs from "styled-components-ts";

import AoDai from "./ao-dai.svg";

const SMALL_CONTAINER = [180, 540];
const SMALL_SVG = [201, 563];
const SMALL_ADJUSTMENT = [-11, -10];

const LARGE_CONTAINER = [267, 800];
const LARGE_SVG = [280, 834];
const LARGE_ADJUSTMENT = [-7, -15];

export type AoDaiViewSize = "large";
export interface IContainerProps {
  viewsize?: AoDaiViewSize;
}

const Container = styledTs<IContainerProps>(styled.div)`
  overflow: hidden;
  width: ${({ viewsize }) => viewsize === "large" ? LARGE_CONTAINER[0] : SMALL_CONTAINER[0]}px;
  height: ${({ viewsize }) => viewsize === "large" ? LARGE_CONTAINER[1] : SMALL_CONTAINER[1]}px;
  position: relative;
  margin: 10px;
`;

export interface IOverlayProps extends IContainerProps {
  hairColor?: string;
}

const AoDaiOverlay = styledTs<IOverlayProps>(styled.div)`
  position: absolute;
  z-index: 1;
  left: ${({ viewsize }) => viewsize === "large" ? LARGE_ADJUSTMENT[0] : SMALL_ADJUSTMENT[0]}px;
  top: ${({ viewsize }) => viewsize === "large" ? LARGE_ADJUSTMENT[1] : SMALL_ADJUSTMENT[1]}px;

  svg {
    width: ${({ viewsize }) => viewsize === "large" ? LARGE_SVG[0] : SMALL_SVG[0]}px;
    height: ${({ viewsize }) => viewsize === "large" ? LARGE_SVG[1] : SMALL_SVG[1]}px;

    .hair path,
    .brow {
      fill: ${({ hairColor = "#2C222B" }) => hairColor}
    }
  }
`;

/**
 * The width and height have to be 1:1, otherwise the clip-path gets distorted,
 * so we choose height, the longer side.
 */
const PhotoContainer = styledTs<IContainerProps>(styled.div)`
  clip-path: url(#mask);
  width: ${({ viewsize }) => viewsize === "large" ? LARGE_CONTAINER[1] : SMALL_CONTAINER[1]}px;
  height: ${({ viewsize }) => viewsize === "large" ? LARGE_CONTAINER[1] : SMALL_CONTAINER[1]}px;

  img {
    object-fit: cover;
    object-position: center center;
    width: ${({ viewsize }) => viewsize === "large" ? LARGE_CONTAINER[0] : SMALL_CONTAINER[0]}px;
    height: ${({ viewsize }) => viewsize === "large" ? LARGE_CONTAINER[1] : SMALL_CONTAINER[1]}px;
    filter: saturate(2);
    background-color: #fff;
  }
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

export interface IProps {
  children: JSX.Element;
  lazyload?: boolean;
  viewsize?: AoDaiViewSize;
}

class AoDaiMask extends React.Component<IProps> {
  public render() {
    const { children, lazyload = true, viewsize } = this.props;
    const defaultHeight = viewsize === "large" ? LARGE_CONTAINER[1] : SMALL_CONTAINER[1];
    const index = this.deriveIndex(children.props.src);
    return (
      <Container viewsize={viewsize}>
        <AoDaiOverlay
          hairColor={hairColors[index]}
          viewsize={viewsize}
          dangerouslySetInnerHTML={{ __html: AoDai }}
        />
        <PhotoContainer viewsize={viewsize}>
          {
            lazyload
              ? (
                <LazyLoad height={defaultHeight} offset={100} once>
                  {children}
                </LazyLoad>
              )
              : children
          }
        </PhotoContainer>
      </Container>
    );
  }

  private deriveIndex = (src: string): number => {
    return src.split("").reduce((total, char) => total + char.charCodeAt(0), 0) % hairColors.length;
  }
}

export default AoDaiMask;
