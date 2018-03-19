import Switch from "antd/lib/switch";
import React from "react";
import { Helmet } from "react-helmet";
import styled, { keyframes } from "styled-components";

import Title from "./Title";

const Container = styled.div`
  min-height: 100vh;
  background-color: #fc3;
  display: flex;
  flex-direction: column;
`;

const PlaybackSwitch = styled(Switch)`
  display: inline-block;
  margin-top: 10px;
  margin-left: 10px;
`;

const TitleRow = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DogRow = styled.div`
  flex-grow: 1;
  overflow: hidden;
  text-align: center;
  position: relative;
  min-height: 200px;
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
  background: url("/images/firecracker.gif") repeat-x left top;
  animation: ${KeyFrames} 3s linear infinite;
  width: 300vw;
  height: 150px;
  top: 0;
`;

const FirecrackersBottom = styled(FirecrackersTop)`
  background-position: 75px top;
  top: 125px;
`;

interface IState {
  isPlaying: boolean;
}

class DogApp extends React.Component<any, IState> {

  private audio = new Audio("/audios/ly-ngua-o.aac");

  constructor(props: any) {
    super(props);
    this.state = {
      isPlaying: true,
    };
  }

  public componentDidMount() {
    this.audio.loop = true;
    this.audio.volume = 0.5;
    const playbackPromise = this.audio.play();
    if (playbackPromise !== undefined) {
      playbackPromise.catch(() => {
        this.setState({ isPlaying: false });
      });
    }
  }

  public componentWillUnmount() {
    this.audio.pause();
    this.audio.src = "";
    this.audio.load();
  }

  public render() {
    const { isPlaying } = this.state;
    return (
      <>
        <Helmet>
          <link href="//fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="BẢOLABS – Year of the Dog" />
          <meta property="og:url" content="http://labs.baohouse.net/year-of-the-dog" />
          <meta property="og:image" content="http://labs.baohouse.net/images/dog-app.thumb.png" />
          <title>BẢOLABS – Year of the Dog</title>
        </Helmet>
        <Container>
          <div>
            <PlaybackSwitch
              checked={isPlaying}
              checkedChildren="Playing"
              unCheckedChildren="Paused"
              onChange={this.togglePlayback}
            />
          </div>
          <TitleRow>
            <Title>
              Happy&nbsp;New&nbsp;Year of&nbsp;the&nbsp;Dog!
            </Title>
          </TitleRow>
          <DogRow>
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
  }
}

export default DogApp;
