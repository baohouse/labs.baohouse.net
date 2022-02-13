import {
  AppstoreOutlined,
  CaretRightOutlined,
  PauseOutlined,
  PictureOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Input, Radio, Spin } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';

import type { FC } from 'react';
import { History } from 'history';
import { RadioChangeEvent } from 'antd/lib/radio';
import { SEARCH_TEXT } from './AoDaiQueryStringParams';
import styled from 'styled-components';

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
    margin: 0 5px;
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
  isPlaying: boolean;
  mode: string;
  togglePlayingHandler: () => void;
  viewModeHandler: (mode: string) => void;
}

export interface IState {
  text?: string;
}

const AoDaiSearchNav: FC<IProps> = ({
  history,
  isBusy,
  isMobile,
  isPlaying,
  location,
  mode,
  togglePlayingHandler,
  viewModeHandler,
}) => {
  const params = new URLSearchParams(location.search);
  const paramsText = params.get(SEARCH_TEXT) || '';
  const SearchBarContainerToUse = isMobile ? NavContainerMobile : NavContainer;
  const searchIcon = isBusy ? <SearchSpinner size="small" /> : <SearchOutlined />;
  const [text, setText] = useState<string>('');

  const searchHandler = useCallback((text: string = '') => {
    const params = new URLSearchParams(location.search);
    if (params.get(SEARCH_TEXT) !== text) {
      params.set(SEARCH_TEXT, text);
      let hasValue = false;
      params.forEach(v => {
        if (v) {
          hasValue = true;
        }
      });
      history.push({ search: hasValue ? `?${params.toString()}` : '' });
    }
  }, []);

  const searchValueHandler = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    const nextText = (event.target as HTMLInputElement).value;
    if (text !== nextText) {
      setText(nextText);
    }
  }, []);

  useEffect(() => {
    setText(paramsText);
  }, [paramsText]);

  return (
    <SearchBarContainerToUse>
      <Input.Search
        disabled={isBusy}
        enterButton={searchIcon}
        onChange={searchValueHandler}
        onSearch={searchHandler}
        placeholder="Filter images by searchable text"
        value={text}
      />
      <ViewMode
        buttonStyle="solid"
        onChange={(e: RadioChangeEvent) => viewModeHandler(e.target.value)}
        value={mode || 'grid'}
      >
        <Radio.Button value="grid">
          <AppstoreOutlined />
        </Radio.Button>
        <Radio.Button value="slideshow">
          <PictureOutlined />
        </Radio.Button>
      </ViewMode>
      <Button
        type={isPlaying ? 'primary' : 'default'}
        disabled={mode !== 'slideshow'}
        onClick={togglePlayingHandler}
      >
        {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
      </Button>
    </SearchBarContainerToUse>
  );
};

export default AoDaiSearchNav;
