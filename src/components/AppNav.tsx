import { Button, Navbar } from "@blueprintjs/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  height: 45px;
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

      <Link to="/ao-dai" role="button" className="pt-button pt-minimal">
        ÁoDAI
      </Link>
      <Button disabled className="pt-minimal">
        HiveMind
      </Button>
      <Button disabled className="pt-minimal">
        SustainedVolunteerism
      </Button>
      <Link to="/viet-braille" role="button" className="pt-button pt-minimal">
        ViệtBraille
      </Link>
      <Button disabled className="pt-minimal">
        ZhongShi❤︎MỵChâu
      </Button>

      <Navbar.Divider />

      <Button disabled className="pt-minimal">
        LunarNewYear
      </Button>
      <Button disabled className="pt-minimal">
        🐈
      </Button>
      <Link to="/year-of-the-dog" role="button" className="pt-button pt-minimal">
        🐕
      </Link>

    </Navbar.Group>
  </Navbar>
);

export default AppNav;
