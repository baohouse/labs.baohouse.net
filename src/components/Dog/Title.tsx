import { findKey, includes } from 'lodash';
import React from 'react';
import { useContainerQuery } from 'react-container-query';
import styled from 'styled-components';

import Breakpoints, { BreakpointsMap } from 'constants/Breakpoints';

const TitleContainer = styled.div`
  width: 100%;
`;

const TitleContent = styled.h1`
  font-family: 'Press Start 2P', cursive;
  line-height: 1.2em;
  color: #9e2b0e;
  text-align: center;
  margin: 1em;
`;

const TitleContentSm = styled(TitleContent)`
  font-size: 1.4rem;
`;

const Title = ({ children }: any) => {
  const [params, containerRef] = useContainerQuery(BreakpointsMap, {});
  const isMobile = includes(
    [Breakpoints.X_SMALL, Breakpoints.SMALL],
    findKey(params)
  );
  return (
    <TitleContainer ref={containerRef}>
      {isMobile ? (
        <TitleContentSm>{children}</TitleContentSm>
      ) : (
        <TitleContent>{children}</TitleContent>
      )}
    </TitleContainer>
  );
};

export default Title;
