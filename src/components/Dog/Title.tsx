import React from 'react';
import { ContainerQuery } from 'react-container-query';
import styled from "styled-components";

const query = {
  sm: {
    maxWidth: 767,
  },
};

const TitleContainer = styled.div`
  width: 100%;
`;

const TitleContent = styled.h1`
  font-family: 'Press Start 2P', cursive;
  line-height: 1.8rem;
  color: #9E2B0E;
  text-align: center;
`;

const TitleContentSm = styled(TitleContent)`
  font-size: 1.4rem;
`;

const Title = (props: any) => {
  const { children } = props;
  return (
    <TitleContainer>
      <ContainerQuery query={query}>
        {({ sm }) => {
          if (sm) {
            return (
              <TitleContentSm>
                {children}
              </TitleContentSm>
            );
          } else {
            return (
              <TitleContent>
                {children}
              </TitleContent>
            );
          }
        }}
      </ContainerQuery>
    </TitleContainer>
  );
};

export default Title;
