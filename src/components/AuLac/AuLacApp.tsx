import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

/// <reference types="@types/timelinejs3" />
require("script-loader!timelinejs3/compiled/js/timeline");

import TimelineEvents from "./TimelineEvents.json";

// The style will be replaced by timelinejs3 upon initialization
const Timeline = styled.div`
  height: calc(100vh - 65px);
  min-height: 600px;
`;

class AuLacApp extends React.Component {

  private timeline?: TL.ITimeline;

  public componentDidMount() {
    this.timeline = new TL.Timeline(
      "timeline-embed",
      TimelineEvents,
      {
        scale_factor: 1 / 2,
      },
    );
    // Hack to get timeline to correctly render
    setTimeout(() => this.timeline && this.timeline.updateDisplay(), 500);
  }

  public render() {
    return (
      <>
        <Helmet>
          <link
            title="timeline-styles"
            rel="stylesheet"
            href="//cdn.knightlab.com/libs/timeline3/latest/css/timeline.css"
          />
          <title>BẢOLABS – Tales of Âu Lạc</title>
        </Helmet>
        <Timeline id="timeline-embed" />
      </>
    );
  }
}

export default AuLacApp;
