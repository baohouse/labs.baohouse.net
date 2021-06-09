import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.img`
  height: 45px;
  margin-top: 12px;
  margin-left: 17px;
`;

const StyledMenu = styled(Menu)`
  border-right: 0;
`;

const AppNav = () => (
  <>
    <Link to="/">
      <Logo src="/images/baolabs-logo.svg" alt="BẢOLABS" />
    </Link>
    <StyledMenu mode="vertical">
      <Menu.Item key="ao-dai">
        <Link to="/ao-dai">ÁoDAI</Link>
      </Menu.Item>

      <Menu.Item key="au-lac">
        <Link to="/au-lac">ÂuLạc</Link>
      </Menu.Item>

      <Menu.Item key="face-match">
        <Link to="/face-match">FaceMatch</Link>
      </Menu.Item>

      <Menu.Item key="viet-braille">
        <Link to="/viet-braille">Việt&#8203;Braille</Link>
      </Menu.Item>
    </StyledMenu>
  </>
);

export default AppNav;
