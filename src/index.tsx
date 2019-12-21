import { findKey, includes } from 'lodash';
import React from 'react';
import { ContainerQuery } from 'react-container-query';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import Breakpoints, { BreakpointsMap, Params } from 'constants/Breakpoints';

ReactDOM.render(
  <BrowserRouter>
    <ContainerQuery query={BreakpointsMap}>
      {(breakpointsResult: Params) => {
        const isMobile: boolean = includes(
          [Breakpoints.X_SMALL, Breakpoints.SMALL],
          findKey(breakpointsResult)
        );
        return <App isMobile={isMobile} />;
      }}
    </ContainerQuery>
  </BrowserRouter>,
  document.getElementById('root')
);
