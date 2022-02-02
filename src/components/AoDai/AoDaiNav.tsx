import { AppstoreOutlined, PictureOutlined, SearchOutlined } from '@ant-design/icons';
import { Input, Radio, Spin } from "antd";
import { RadioChangeEvent } from "antd/lib/radio";
import { History } from "history";
import React from "react";
import styled from "styled-components";

import { SEARCH_TEXT } from "./AoDaiQueryStringParams";

const NavContainer = styled.div`
  position: fixed;
  top: 5px;
  left: 205px;
  right: 5px;
  z-index: 15;

  display: flex;
`;

const NavContainerMobile = styled(NavContainer)`
  left: 5px;
`;

const SearchSpinner = styled(Spin)`
  .ant-spin-dot i {
    background-color: #fff;
  }
`;

const ViewMode = styled(Radio.Group)`
  &.ant-radio-group {
    margin-left: 5px;
    white-space: nowrap;
  }

  .ant-radio-button-wrapper-checked {
    color: #fff;
    background-color: #1890ff;

    &:hover,
    &:focus {
      color: #fff;
      background-color: #40a9ff;
    }
  }
`;

export interface IProps {
  history: History;
  location: Location;
  isBusy?: boolean;
  isMobile?: boolean;
  mode: string;
  viewModeHandler: (mode: string) => void;
}

export interface IState {
  text?: string;
}

export default class AoDaiSearchNav extends React.Component<IProps, IState> {
  public render() {
    const { isBusy, isMobile, mode, viewModeHandler } = this.props;
    const params = new URLSearchParams(location.search);

    const SearchBarContainerToUse = isMobile ? NavContainerMobile : NavContainer;
    const searchIcon = isBusy ? <SearchSpinner size="small" /> : <SearchOutlined />;
    return (
      <SearchBarContainerToUse>
        <Input.Search
          onChange={this.searchValueHandler}
          disabled={isBusy}
          enterButton={searchIcon}
          placeholder="Filter images by searchable text"
          onSearch={this.searchHandler}
          defaultValue={params.get(SEARCH_TEXT) || ''}
        />
        <ViewMode value={mode} onChange={(e: RadioChangeEvent) => viewModeHandler(e.target.value)}>
          <Radio.Button value="grid">
            <AppstoreOutlined />
          </Radio.Button>
          <Radio.Button value="slideshow">
            <PictureOutlined />
          </Radio.Button>
        </ViewMode>
      </SearchBarContainerToUse>
    );
  }

  private searchValueHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const text = (event.target as HTMLInputElement).value;
    this.setState({ text });
  }

  private searchHandler = (text: string = "") => {
    const params = new URLSearchParams(this.props.location.search);
    if (params.get(SEARCH_TEXT) !== text) {
      params.set(SEARCH_TEXT, text);
      let hasValue = false;
      params.forEach((v) => {
        if (v) {
          hasValue = true;
        }
      });
      this.props.history.push({ search: hasValue ? `?${params.toString()}` : '' });
    }
  }
}
