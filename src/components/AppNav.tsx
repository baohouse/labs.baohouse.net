import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = styled.img`
  height: 45px;
`;

class AppNav extends React.Component {
  public shouldComponentUpdate() {
    return false;
  }

  public render() {
    return (
      <Menu mode="inline">
        <Menu.Item key="logo">
          <Link to="/">
            <Logo src="/images/baolabs-logo.svg" alt="BẢOLABS" />
          </Link>
        </Menu.Item>

        <Menu.Item key="ao-dai">
          <Link to="/ao-dai">
            ÁoDAI
          </Link>
        </Menu.Item>

        <Menu.Item key="au-lac">
          <Link to="/au-lac">
            ÂuLạc
          </Link>
        </Menu.Item>

        <Menu.Item key="hive-mind" disabled>
          Hive&#8203;Mind
        </Menu.Item>

        <Menu.SubMenu title={<span>Lunar&#8203;NewYear</span>}>

          <Menu.Item key="cat" disabled>
            🐈 Cat
          </Menu.Item>

          <Menu.Item key="dog">
            <Link to="/year-of-the-dog">
              🐕 Dog
            </Link>
          </Menu.Item>

        </Menu.SubMenu>

        <Menu.Item key="volunteerism" disabled>
          Sustained&#8203;Volunteerism
        </Menu.Item>

        <Menu.Item key="viet-braille">
          <Link to="/viet-braille">
            Việt&#8203;Braille
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default AppNav;
