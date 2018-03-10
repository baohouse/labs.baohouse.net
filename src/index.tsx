import _ from "lodash";
import React from "react";
import { ContainerQuery } from "react-container-query";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "components/App";
import Breakpoints, { BreakpointsMap, Params } from "constants/Breakpoints";

require("babel-core/register");
require("babel-polyfill");

ReactDOM.render(
  <ContainerQuery query={BreakpointsMap}>
    {(breakpointsResult: Params) => {
      const isMobile: boolean = _.includes(
        [Breakpoints.X_SMALL, Breakpoints.SMALL],
        _.findKey(breakpointsResult, (value) => value),
      );
      return (
        <BrowserRouter>
          <App isMobile={isMobile} />
        </BrowserRouter>
      );
    }}
  </ContainerQuery>,
  document.getElementById("root"),
);
