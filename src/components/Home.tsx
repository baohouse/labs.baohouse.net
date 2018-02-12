import { observer } from "mobx-react";
import React from "react";
import LazyLoad from "react-lazyload";

import Flickr from "models/Flickr";
import FlickrStore from "stores/FlickrStore";

type Photo = (props: Flickr.Photo) => JSX.Element;

const Photo: Photo = ({ id, height_c, title, url_c }) => (
  <li>
    <LazyLoad height={height_c} offset={100} once>
      <img alt={title} src={url_c}/>
    </LazyLoad>
  </li>
);

@observer
class Home extends React.Component {

  private flickrStore: FlickrStore = new FlickrStore();

  public componentWillMount() {
    this.flickrStore.getInterestingPhotos();
  }

  public render() {
    const { photos } = this.flickrStore;

    return (
      <div>
        <ul>
          <li>Áo Dài Idea Automation</li>
          <li>Effective Coalitions</li>
          <li>Screenplay: Zhong Shi &amp; Mỵ Châu</li>
          <li>Stress-Managed Organizing &amp; Volunteerism</li>
          <li>Vietnamese Braille Converter</li>
        </ul>
        <ul>
          {photos.map((photo) => <Photo key={photo.id} {...photo}/>)}
        </ul>
      </div>
    );
  }
}

export default Home;
