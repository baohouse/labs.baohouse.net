import React, { FC } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import AoDai from './ao-dai.svg';

const SMALL_CONTAINER = [180, 540];
const LARGE_CONTAINER = [267, 800];

export type AoDaiViewSize = 'large';
export interface IContainerProps {
  viewsize?: AoDaiViewSize;
}

const Container = styled.div`
  overflow: hidden;
  width: ${({ viewsize }: IContainerProps) =>
    viewsize === 'large' ? LARGE_CONTAINER[0] : SMALL_CONTAINER[0]}px;
  height: ${({ viewsize }) => (viewsize === 'large' ? LARGE_CONTAINER[1] : SMALL_CONTAINER[1])}px;
  position: relative;
  margin: 10px;

  .CrossfadeImage {
    height: 100%;
    width: 100%;
  }
`;
// .CrossfadeImage override required for initial load because initial image height is 0px

export interface IOverlayProps extends IContainerProps {
  hairColor?: string;
}

const AoDaiOverlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  svg {
    width: 100%;
    height: 100%;

    .hair path,
    .brow {
      transition: fill 0.5s ease;
      fill: ${({ hairColor = '#2C222B' }: IOverlayProps) => hairColor};
    }
  }
`;

/**
 * The width and height have to be 1:1, otherwise the clip-path gets distorted,
 * so we choose height, the longer side.
 */
const PhotoContainer = styled.div`
  clip-path: url(#mask);
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 100%;
    filter: saturate(2);
    background-color: #fff;
  }
`;

/**
 * @see http://www.collectedwebs.com/art/colors/hair/
 */
const hairColors = [
  '#090806', // Black
  '#2C222B', // Off Black
  '#71635A', // Dark Gray
  '#B7A69E', // Medium Gray
  '#D6C4C2', // Light Gray
  '#CABFB1', // Platinum Blonde
  '#DCD0BA', // Bleached Blonde
  /**
   * Disabling because it clashes with current skin tone.
   * TODO: Add skin tone randomizer
   */
  // "#FFF5E1", // White Blonde
  '#E6CEA8', // Light Blonde
  '#E5C8A8', // Golden Blonde
  '#DEBC99', // Ash Blonde
  '#B89778', // Honey Blonde
  '#A56B46', // Strawberry Blonde
  '#B55239', // Light Red
  '#8D4A43', // Dark Red
  '#91553D', // Light Auburn
  '#533D32', // Dark Auburn
  '#3B3024', // Dark Brown
  '#554838', // Golden Brown
  '#4E433F', // Medium Brown
  '#504444', // Chestnut Brown
  '#6A4E42', // Brown
  '#A7856A', // Light Brown
  '#977961', // Ash Brown
];

export interface IProps {
  children: JSX.Element;
  lazyload?: boolean;
  viewsize?: AoDaiViewSize;
}

const deriveIndex = (src: string): number => {
  return src.split('').reduce((total, char) => total + char.charCodeAt(0), 0) % hairColors.length;
};

const AoDaiMask: FC<IProps> = ({ children, lazyload = true, viewsize }) => {
  const defaultHeight = viewsize === 'large' ? LARGE_CONTAINER[1] : SMALL_CONTAINER[1];
  const index = deriveIndex(children.props.src);
  return (
    <Container viewsize={viewsize}>
      <AoDaiOverlay
        hairColor={hairColors[index]}
        viewsize={viewsize}
        dangerouslySetInnerHTML={{ __html: AoDai }}
      />
      <PhotoContainer>
        {lazyload ? (
          <LazyLoad height={defaultHeight} offset={100} once>
            {children}
          </LazyLoad>
        ) : (
          children
        )}
      </PhotoContainer>
    </Container>
  );
};

export default AoDaiMask;
