import { Button, Navbar } from "@blueprintjs/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  height: 45px;
`;

const StyledLink = styled(Link)`
  text-align: left !important;
`;

const AnimalButton = styled(Button)`
  padding: 0;
  font-size: 1.6rem;
`;

const AnimalLink = styled(StyledLink)`
  padding: 0;
  font-size: 1.6rem;
`;

const AppNav = () => (
  <Navbar className="pt-fixed-top">
    <Navbar.Group>
      <Navbar.Heading>
        <Link to="/">
          <Logo src="/images/baolabs-logo.svg" alt="BẢOLABS" />
        </Link>
      </Navbar.Heading>

      <Navbar.Divider />

      <StyledLink to="/ao-dai" role="button" className="pt-button pt-minimal">
        ÁoDAI
      </StyledLink>
      <Button disabled className="pt-minimal">
        Hive&#8203;Mind
      </Button>
      <Button disabled className="pt-minimal">
        Sustained&#8203;Volunteerism
      </Button>
      <StyledLink to="/viet-braille" role="button" className="pt-button pt-minimal">
        Việt&#8203;Braille
      </StyledLink>
      <Button disabled className="pt-minimal">
        ZhongShi❤︎MỵChâu
      </Button>

      <Navbar.Divider />

      <Button disabled className="pt-minimal">
        Lunar&#8203;NewYear
      </Button>
      <AnimalButton disabled className="pt-minimal">
        🐈
      </AnimalButton>
      <AnimalLink to="/year-of-the-dog" role="button" className="pt-button pt-minimal">
        🐕
      </AnimalLink>

    </Navbar.Group>
  </Navbar>
);

export default AppNav;
