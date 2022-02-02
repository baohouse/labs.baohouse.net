import Icon from '@ant-design/icons';
import React from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import { Helmet } from 'react-helmet';
import styled, { css, keyframes } from 'styled-components';

import Title from './Title';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background-color: #fc3;
`;

const PlaybackButton = styled(Icon)`
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

interface IState {
  isPlaying: boolean;
}

class DogApp extends React.Component<IProps, IState> {
  private audio = new Audio('/audios/ly-ngua-o.aac');

  constructor(props: IProps) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }

  public componentDidMount() {
    this.audio.loop = true;
    this.audio.volume = 0.5;
  }

  public componentWillUnmount() {
    this.audio.pause();
    this.audio.src = '';
    this.audio.load();
  }

  public render() {
    const { isMobile } = this.props;
    const { isPlaying } = this.state;
    return (
      <>
        <GoogleFontLoader
          fonts={[
            {
              font: 'Press Start 2P',
            },
          ]}
        />
        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="BẢOLABS – Year of the Dog" />
          <meta property="og:url" content="http://labs.baohouse.net/year-of-the-dog" />
          <meta property="og:image" content="http://labs.baohouse.net/images/dog-app.thumb.png" />
          <title>BẢOLABS – Year of the Dog</title>
        </Helmet>
        <Container>
          <TitleRow>
            <PlaybackButton
              onClick={this.togglePlayback}
              theme="filled"
              type={isPlaying ? 'pause-circle' : 'play-circle'}
            />
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
  }

  private togglePlayback = () => {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.setState({ isPlaying: !isPlaying });
  };
}

export default DogApp;
