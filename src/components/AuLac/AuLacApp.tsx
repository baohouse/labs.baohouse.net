import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

/// <reference types="@types/timelinejs3" />
require("script-loader!timelinejs3/compiled/js/timeline");

import "timelinejs3/compiled/css/timeline.css";
import TimelineEvents from "./TimelineEvents.json";

// The style will be replaced by timelinejs3 upon initialization
const Timeline = styled.div`
  height: 100vh;
  min-height: 600px;
`;

class AuLacApp extends React.Component {

  private timeline?: TL.ITimeline;

  public componentDidMount() {
    this.timeline = new TL.Timeline(
      "timeline-embed",
      TimelineEvents,
      {
        scale_factor: 1,
      },
    );

    // Hack to get timeline to correctly render
    setTimeout(() => this.timeline && this.timeline.updateDisplay(), 2000);
  }

  public render() {
    return (
      <>
        <Helmet>
          <title>BẢOLABS – Tales of Âu Lạc</title>
        </Helmet>
        <Timeline id="timeline-embed" />
      </>
    );
  }
}

export default AuLacApp;
