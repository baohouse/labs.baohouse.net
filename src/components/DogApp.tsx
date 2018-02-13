import { Switch } from "@blueprintjs/core";
import { bind } from "decko";
import React from "react";
import { Col, Grid, Row } from "react-flexbox-grid";
import styled, { keyframes } from "styled-components";

const Container = styled(Grid)`
  min-height: calc(100vh - 50px);
  background-color: #fc3;
`;

const PlaybackSwitch = styled(Switch)`
  margin-top: 10px;
`;

const Title = styled.h1`
  font-family: 'Press Start 2P', cursive;
  line-height: 1.3em;
  color: #9E2B0E;
  margin-top: 10vh;
  margin-bottom: -30vh;
`;

const DogContainer = styled(Col)`
  overflow: hidden;
  position: relative;
`;

const Dogs = styled.img`
  margin-top: calc(50vh - 160px);
  margin-bottom: 160px;
  position: relative;
  z-index: 1;
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
  top: calc(50vh - 200px);
`;

const FirecrackersBottom = styled(FirecrackersTop)`
  top: calc(50vh - 20px);
  background-position: 75px top;
`;

interface IState {
  isPlaying: boolean;
}

class DogApp extends React.Component<any, IState> {

  private audio = new Audio("/audio/ly-ngua-o.aac");

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
      <Container fluid>
        <Row>
          <Col xs={true}>
            <PlaybackSwitch
              className="pt-large"
              checked={isPlaying}
              label={isPlaying ? "Playing music" : "Paused"}
              onChange={this.togglePlayback} />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={true}>
            <Title>Happy New Year<br/>of the Dog!</Title>
          </Col>
        </Row>
        <Row center="xs">
          <DogContainer xs={true}>
            <Dogs src="/images/dogs.gif" />
            <FirecrackersTop />
            <FirecrackersBottom />
          </DogContainer>
        </Row>
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
