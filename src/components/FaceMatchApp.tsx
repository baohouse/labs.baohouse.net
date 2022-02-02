import { PushpinOutlined } from '@ant-design/icons';
import { Button, Col, Row, Spin } from "antd";
import { isNumber } from "lodash";
import { action, runInAction } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

import FaceCognitionStore from "stores/FaceCognitionStore";

const CapturedImage = styled.img`
  width: 480px;
  height: 360px;
  background-color: lightgray;
  margin-bottom: 1px;
  margin-left: 1px;
`;

const CaptureButtonContainer = styled.div`
  position: absolute;
  top: 1px;
  left: 2px;
`;

const FaceRectangle = styled.div`
  position: absolute;
  border: 2px solid blue;
`;

const MatchNumber = styled.div`
  font-size: 72px;
  line-height: 72px;
  display: block;
`;

const MatchNumberLabel = styled.div`
  margin-bottom: 1em;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 480px;
  height: 360px;
  margin: 0 0 0 auto;
  background-color: white;
  text-align: center;
`;

const StyledWebcam = styled.div`
  video {
    display: block;
    background-color: lightgray;
    margin: 0 0 1px auto;
  }
`;

interface IProps {
  faceCognitionStore: FaceCognitionStore;
}

@observer
export default class FaceMatchApp extends React.Component<IProps> {
  private faceCognitionStore: FaceCognitionStore = new FaceCognitionStore();
  private webcam?: any;

  public render() {
    const {
      isLoading,
      matchConfidence,
      photo1,
      photo2,
    } = this.faceCognitionStore;

    const match = isLoading
      ? <Spin size="large" />
      : (
        <div>
          <MatchNumber>
            {this.formatPercentage(matchConfidence)}
          </MatchNumber>
          <MatchNumberLabel>
            match confidence
          </MatchNumberLabel>
          <div>
            <Button onClick={this.getMatchConfidence}>
              Update
            </Button>
          </div>
        </div>
      );
    return <>
      <Row>
        <Col span={12}>
          <StyledWebcam>
            <Webcam
              audio={false}
              height={360}
              ref={(webcam: any) => this.webcam = webcam}
              screenshotFormat="image/png"
              width={480}
            />
          </StyledWebcam>
        </Col>
        <Col span={12}>
          {photo1.faceRectangle && <FaceRectangle style={{
            height: photo1.faceRectangle.height,
            left: photo1.faceRectangle.left,
            top: photo1.faceRectangle.top,
            width: photo1.faceRectangle.width,
          }} />}
          <CapturedImage src={photo1.data} />
          <CaptureButtonContainer>
            <Button onClick={this.capture(1)}>
              <PushpinOutlined />
            </Button>
          </CaptureButtonContainer>
        </Col>
      </Row>

      <Row>
        <Col span={12}>
          <SpinnerContainer>
            {match}
          </SpinnerContainer>
        </Col>
        <Col span={12}>
          {photo2.faceRectangle && <FaceRectangle style={{
            height: photo2.faceRectangle.height,
            left: photo2.faceRectangle.left,
            top: photo2.faceRectangle.top,
            width: photo2.faceRectangle.width,
          }} />}
          <CapturedImage src={photo2.data} />
          <CaptureButtonContainer>
            <Button onClick={this.capture(2)}>
              <PushpinOutlined />
            </Button>
          </CaptureButtonContainer>
        </Col>
      </Row>
    </>;
  }

  @action
  private capture = (id: number) => {
    return () => {
      const data: string = this.webcam.getScreenshot();
      runInAction(() => {
        if (id === 1) {
          this.faceCognitionStore.photo1 = { data, faceId: "" };
        } else {
          this.faceCognitionStore.photo2 = { data, faceId: "" };
        }
      });
    };
  }

  private formatPercentage(num?: number) {
    return isNumber(num) ? `${(num * 100).toFixed(0)}%` : "TBD";
  }

  private getMatchConfidence = () => {
    this.faceCognitionStore.getFaceMatchConfidence();
  }
}
