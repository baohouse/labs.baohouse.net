import React from "react";
import styled from "styled-components";

import { HEADER_HEIGHT } from "AppConstants";

const Header = styled.h1`
  margin: 0 auto;
  padding-top: calc(50vh - ${HEADER_HEIGHT});
  text-align: center;
`;

const PageNotFound = () => (
  <Header>
    Page not found
  </Header>
);

export default PageNotFound;
