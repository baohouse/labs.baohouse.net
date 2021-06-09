import React from 'react';
import { Helmet } from 'react-helmet';
import styled, {css} from 'styled-components';

// @ts-ignore
import { Timeline } from '@knight-lab/timelinejs';

import '@knight-lab/timelinejs/dist/css/timeline.css';
import TimelineEvents from './TimelineEvents.json';

const timelineStyleOverride = css`
  .tl-timeline h2 {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
      'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
  }
`;

// The style will be replaced by timelinejs3 upon initialization
const TimelineContainer = styled.div`
  height: 100vh;
  min-height: 600px;

  ${timelineStyleOverride}
`;

class AuLacApp extends React.Component {
  private timeline?: Timeline;

  public componentDidMount() {
    this.timeline = new Timeline('timeline-embed', TimelineEvents, {
      scale_factor: 1,
    });

    // Hack to get timeline to correctly render
    setTimeout(() => this.timeline && this.timeline.updateDisplay(), 2000);
  }

  public render() {
    return (
      <>
        <Helmet>
          <title>BẢOLABS – Tales of Âu Lạc</title>
        </Helmet>
        <TimelineContainer><div id="timeline-embed" /></TimelineContainer>
      </>
    );
  }
}

export default AuLacApp;
