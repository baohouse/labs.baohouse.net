import { Switch } from "@blueprintjs/core";
import { bind } from "decko";
import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 50px);
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

const Title = styled.h1`
  font-family: 'Press Start 2P', cursive;
  line-height: 1.3em;
  color: #9E2B0E;
  text-align: center;
`;

const DogRow = styled.div`
  flex-grow: 1;
  overflow: hidden;
  text-align: center;
  position: relative;
`;

const Dog = styled.img`
  position: relative;
  z-index: 10;
`;

const KeyFrames = keyframes`
  @include keyframes(slide) {
    0% {
      transform: translate3d(0,0,0);
    }
    100% {
      transform: translate3d(-1500px,0,0);
    }
  }
`;

const FirecrackersTop = styled.div`
  position: absolute;
  background: url("/images/firecracker.gif") repeat-x left top;
  animation: ${KeyFrames} 8s linear infinite;
  width: 300%;
  height: 100%;
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
    this.audio.autoplay = true;
    this.audio.loop = true;
  }

  public componentWillUnmount() {
    this.audio.pause();
    this.audio.src = "";
    this.audio.load();
  }

  public render() {
    const { isPlaying } = this.state;
    return (
      <Container>
        <div>
          <PlaybackSwitch
            className="pt-large"
            checked={isPlaying}
            label={isPlaying ? "Playing music" : "Paused"}
            onChange={this.togglePlayback}
          />
        </div>
        <TitleRow>
          <Title>Happy New Year<br/>of the Dog!</Title>
        </TitleRow>
        <DogRow>
          <Dog src="/images/dogs.gif" />
          <FirecrackersTop />
          <FirecrackersBottom />
        </DogRow>
      </Container>
    );
  }

  @bind
  private togglePlayback() {
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
