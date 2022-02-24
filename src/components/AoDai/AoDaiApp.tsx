import { BackTop, Empty, Spin } from 'antd';
import { Location, LocationListener, UnregisterCallback } from 'history';
import { observer } from 'mobx-react';
import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import FlickrStore from 'stores/FlickrStore';

import AoDaiMask from './AoDaiMask';
import AoDaiMaskedPhoto from './AoDaiMaskedPhoto';
import AoDaiNav from './AoDaiNav';
import { SEARCH_TEXT, VIEW_MODE } from './AoDaiQueryStringParams';
import AoDaiSlideshow from './AoDaiSlideshow';

import AoDaiMaskSvg from './ao-dai-mask.svg';

export interface IContainerProps {
  isLoading?: boolean;
}
const Container = styled.div`
  background-color: #444;
  transition: opacity 1s ease;
  min-height: 100vh;
  padding-top: 42px;

  .ant-spin-dot i {
    background-color: #fff;
  }
`;

const Results = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  opacity: ${({ isLoading }: IContainerProps) => (isLoading ? '0.5' : '1')};
  min-height: calc(100vh - 42px);
`;

const Spinner = styled(Results)`
  align-items: center;
`;

const EmptyResult = styled(Empty)`
  margin-top: calc(50vh - 35px) !important;
  color: white !important;
`;

export interface IProps extends RouteComponentProps<any> {
  isMobile?: boolean;
}

export interface IState {
  imageUrl: string;
  mode: string;
}

@observer
class AoDaiApp extends React.Component<IProps, IState> {
  private flickrStore: FlickrStore = new FlickrStore();
  private unlistener?: UnregisterCallback;

  constructor(props: IProps) {
    super(props);
    const params = new URLSearchParams(location.search);
    this.state = {
      imageUrl: '',
      mode: params.get(VIEW_MODE) || 'grid',
    };
  }

  public componentDidMount() {
    const { history, location } = this.props;
    this.unlistener = history.listen(this.locationHandler);
    const params = new URLSearchParams(location.search);
    this.search(params.get(SEARCH_TEXT) || '');
  }

  public componentWillUnmount() {
    if (this.unlistener) {
      this.unlistener();
    }
  }

  public render() {
    const { history, isMobile } = this.props;
    const { imageUrl, mode } = this.state;
    const { isLoading, isPlaying, photos } = this.flickrStore;
    let body;

    if (isLoading && photos.length) {
      body = (
        <Spinner>
          <Spin size="large" />
        </Spinner>
      );
    } else if (!isLoading && photos.length === 0) {
      body = <EmptyResult image={Empty.PRESENTED_IMAGE_SIMPLE} description="No results" />;
    } else if (mode === 'slideshow') {
      body = (
        <Results isLoading={isLoading}>
          {imageUrl ? (
            <AoDaiMask lazyload={false} viewsize="large">
              <img src={imageUrl} />
            </AoDaiMask>
          ) : (
            <AoDaiSlideshow isPlaying={isPlaying} photos={photos} />
          )}
        </Results>
      );
    } else {
      body = (
        <Results isLoading={isLoading}>
          {photos.map(photo => (
            <AoDaiMaskedPhoto key={`${photo.id}-${photo.owner}`} {...photo} />
          ))}
        </Results>
      );
    }

    return (
      <>
        <Helmet>
          <meta property="og:type" content="website" />
          <meta property="og:title" content="BẢOLABS – ÁoDAI" />
          <meta property="og:url" content="http://labs.baohouse.net/ao-dai" />
          <meta
            property="og:image"
            content="http://labs.baohouse.net/images/ao-dai-app.thumb.png"
          />
          <title>BẢOLABS – ÁoDAI</title>
        </Helmet>
        <Container>
          <AoDaiNav
            history={history}
            imageUploadHandler={this.setImageUrl}
            imageUrl={imageUrl}
            location={location}
            isBusy={isLoading}
            isMobile={isMobile}
            isPlaying={isPlaying}
            mode={mode}
            togglePlayingHandler={() => this.flickrStore.togglePlaying()}
            viewModeHandler={this.setViewMode}
          />
          <BackTop />
          {body}
          <div dangerouslySetInnerHTML={{ __html: AoDaiMaskSvg }} style={{ height: 0 }} />
        </Container>
      </>
    );
  }

  private locationHandler: LocationListener = async (location: Location): Promise<void> => {
    const params = new URLSearchParams(location.search);
    const mode = params.get(VIEW_MODE) || '';
    this.setState({ mode });
    const text = params.get(SEARCH_TEXT) || '';
    await this.search(text);
  };

  private search = async (text: string = ''): Promise<void> => {
    if (this.flickrStore.text === text) {
      return;
    }
    if (text) {
      await this.flickrStore.searchPhotosByText(text);
    } else {
      await this.flickrStore.getInterestingPhotos();
    }
    window.scrollTo(0, 0);
  };

  private setImageUrl = (imageUrl: string): void => {
    this.setState({ imageUrl });
  };

  private setViewMode = (mode: string): void => {
    const params = new URLSearchParams(this.props.location.search);
    if (params.get(VIEW_MODE) !== mode) {
      params.set(VIEW_MODE, mode);
      this.props.history.push({ search: `?${params.toString()}` });
    }
  };
}

export default withRouter(AoDaiApp);
