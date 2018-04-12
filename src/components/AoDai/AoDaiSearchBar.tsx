import { Icon, Input, Spin } from "antd";
import { History } from "history";
import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: fixed;
  top: 5px;
  left: 205px;
  right: 5px;
  z-index: 15;
`;

const SearchBarContainerMobile = styled(SearchBarContainer)`
  left: 5px;
`;

const SearchSpinner = styled<any, any>(Spin)`
  .ant-spin-dot i {
    background-color: #fff;
  }
`;

export interface IProps {
  history: History;
  isBusy?: boolean;
  isMobile?: boolean;
  text?: string;
}

export interface IState {
  text?: string;
}

export default class AoDaiSearchBar extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      text: props.text,
    };
  }

  public componentWillReceiveProps({ text }: IProps) {
    this.setState({ text });
  }

  public render() {
    const { isBusy, isMobile } = this.props;

    const SearchBarContainerToUse = isMobile ? SearchBarContainerMobile : SearchBarContainer;
    const searchIcon = isBusy ? <SearchSpinner size="small" /> : <Icon type="search" />;
    return (
      <SearchBarContainerToUse>
        <Input.Search
          onChange={this.searchValueHandler}
          disabled={isBusy}
          enterButton={searchIcon}
          placeholder="Filter images by searchable text"
          onSearch={this.searchHandler}
          value={this.state.text}
        />
      </SearchBarContainerToUse>
    );
  }

  private searchValueHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const text = (event.target as HTMLInputElement).value;
    this.setState({ text });
  }

  private searchHandler = (text: string = "") => {
    if (this.props.text !== text) {
      this.props.history.push({ search: `?q=${text}` });
    }
  }
}
