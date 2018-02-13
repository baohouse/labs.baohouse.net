import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  margin: 0 auto;
  padding-top: calc(50vh - 40px);
  text-align: center;
`;

const PageNotFound = () => (
  <Header>
    Page not found
  </Header>
);

export default PageNotFound;
