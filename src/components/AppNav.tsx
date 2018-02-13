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
        Hive Mind
      </Button>
      <Button disabled className="pt-minimal">
        Sustainable Volunteerism
      </Button>
      <Button disabled className="pt-minimal">
        Việt Braille
      </Button>
      <Button disabled className="pt-minimal">
        ZhongShi❤︎MỵChâu
      </Button>

      <Navbar.Divider />

      <Button disabled className="pt-minimal">
        Lunar New Year
      </Button>
      <Button disabled className="pt-minimal">
        Cat
      </Button>
      <Link to="/year-of-the-dog" role="button" className="pt-button pt-minimal">
        Dog
      </Link>

    </Navbar.Group>
  </Navbar>
);

export default AppNav;
