import { Button, Col, Icon, Row, Spin } from "antd";
import _ from "lodash";
import { action } from "mobx";
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

const CaptureButton = styled(Button)`
  position: absolute;
  top: 1px;
  left: 1px;
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
  private webcam?: any;

  public render() {
    const {
      isLoading,
      getFaceMatchConfidence,
      matchConfidence,
      photo1,
      photo2,
    } = this.props.faceCognitionStore;

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
            <Button onClick={getFaceMatchConfidence.bind(this.props.faceCognitionStore)}>
              Update
            </Button>
          </div>
        </div>
      );
    return (
      <>
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
            <CapturedImage src={photo1.data} />
            <CaptureButton onClick={this.capture.bind(this, 1)}>
              <Icon type="pushpin" />
            </CaptureButton>
          </Col>
        </Row>

        <Row>
          <Col span={12}>
            <SpinnerContainer>
              {match}
            </SpinnerContainer>
          </Col>
          <Col span={12}>
            <CapturedImage src={photo2.data} />
            <CaptureButton onClick={this.capture.bind(this, 2)}>
              <Icon type="pushpin" />
            </CaptureButton>
          </Col>
        </Row>
      </>
    );
  }

  @action
  private capture(id: number) {
    const imageSrc: string = this.webcam.getScreenshot();
    if (id === 1) {
      this.props.faceCognitionStore.photo1.data = imageSrc;
    } else {
      this.props.faceCognitionStore.photo2.data = imageSrc;
    }
  }

  private formatPercentage(num?: number) {
    return _.isNumber(num) ? `${(num * 100).toFixed(0)}%` : "TBD";
  }
}
