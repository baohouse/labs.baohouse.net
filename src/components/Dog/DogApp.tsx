import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import type { FC } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { Helmet } from 'react-helmet';
import Title from './Title';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: #fc3;
`;

const PlaybackButton = styled.div`
  font-size: 48px;
  color: #9e2b0e;
`;

const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`;

const DogRow = styled.div`
  overflow: hidden;
  text-align: center;
  position: relative;
  min-height: 240px;

  ${({ isMobile }: IProps) =>
    isMobile &&
    css`
      zoom: 0.5;
    `}
`;

const Dog = styled.img`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const KeyFrames = keyframes`
  @include keyframes(slide) {
    0% {
      transform: translate3d(0,0,0);
    }
    100% {
      transform: translate3d(-600px,0,0);
    }
  }
`;

const FirecrackersTop = styled.div`
  position: absolute;
  background: url('/images/firecracker.gif') repeat-x left top;
  animation: ${KeyFrames} 3s linear infinite;
  width: 300vw;
  height: 150px;
  top: 0;
`;

const FirecrackersBottom = styled(FirecrackersTop)`
  background-position: 75px top;
  top: 125px;
`;

interface IProps {
  isMobile?: boolean;
}

const DogApp: FC<IProps> = ({ isMobile }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const togglePlayback = () => {
    (isPlaying ? audio?.pause : audio?.play)?.bind(audio)();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const loadAudio = new Audio('/audios/ly-ngua-o.aac');
    loadAudio.loop = true;
    loadAudio.volume = 0.5;
    setAudio(loadAudio);
    return () => {
      loadAudio.pause();
      loadAudio.src = '';
      loadAudio.load();
    };
  }, []);

  return (
    <>
      <GoogleFontLoader fonts={[{ font: 'Press Start 2P' }]} />
      <Helmet>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BẢOLABS – Year of the Dog" />
        <meta property="og:url" content="http://labs.baohouse.net/year-of-the-dog" />
        <meta property="og:image" content="http://labs.baohouse.net/images/dog-app.thumb.png" />
        <title>BẢOLABS – Year of the Dog</title>
      </Helmet>
      <Container>
        <TitleRow>
          <PlaybackButton>
            {isPlaying ? (
              <PauseCircleFilled onClick={togglePlayback} />
            ) : (
              <PlayCircleFilled onClick={togglePlayback} />
            )}
          </PlaybackButton>
          <Title>Year of&nbsp;the&nbsp;Dog!</Title>
        </TitleRow>
        <DogRow isMobile={isMobile}>
          <Dog src="/images/dogs.gif" />
          <FirecrackersTop />
          <FirecrackersBottom />
        </DogRow>
      </Container>
    </>
  );
};

export default DogApp;
