import { findKey, includes } from 'lodash';
import React from 'react';
import { useContainerQuery } from 'react-container-query';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';
import Breakpoints, { BreakpointsMap } from 'constants/Breakpoints';

const Root = () => {
  const [params, containerRef] = useContainerQuery(BreakpointsMap, {});
  const isMobile = includes([Breakpoints.X_SMALL, Breakpoints.SMALL], findKey(params));
  return (
    <BrowserRouter>
      <div ref={containerRef}>
        <App isMobile={isMobile} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
