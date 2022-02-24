import {
  AppstoreOutlined,
  CaretRightOutlined,
  PauseOutlined,
  PictureOutlined,
  ReloadOutlined,
  SearchOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Button, Input, Radio, Spin, Upload } from 'antd';
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

  > * {
    margin-right: 5px !important;
  }
`;

const NavContainerMobile = styled(NavContainer)`
  left: 5px;

  > * {
    margin-right: 5px !important;
  }
`;

const SearchSpinner = styled(Spin)`
  .ant-spin-dot i {
    background-color: #fff;
  }
`;

const ViewMode = styled(Radio.Group)`
  &.ant-radio-group {
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
  imageUploadHandler: (imageUrl: string) => void;
  imageUrl?: string;
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
  imageUploadHandler,
  imageUrl,
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

  const onImageChange = useCallback(file => {
    imageUploadHandler(file ? URL.createObjectURL(file) : '');
    return false;
  }, []);

  const resetImage = useCallback(() => {
    imageUploadHandler('');
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
      {imageUrl ? (
        <Button onClick={resetImage}>
          <ReloadOutlined />
        </Button>
      ) : (
        <Button
          type={isPlaying ? 'primary' : 'default'}
          disabled={mode !== 'slideshow'}
          onClick={togglePlayingHandler}
        >
          {isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}
        </Button>
      )}
      <Upload disabled={mode !== 'slideshow'} beforeUpload={onImageChange} showUploadList={false}>
        <Button disabled={mode !== 'slideshow'}>
          <UploadOutlined />
        </Button>
      </Upload>
    </SearchBarContainerToUse>
  );
};

export default AoDaiSearchNav;
