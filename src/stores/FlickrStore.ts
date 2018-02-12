import { action, observable, runInAction, useStrict } from "mobx";

import Flickr from "models/Flickr";
import FlickrService from "services/FlickrService";

import configJson from "config.json";

useStrict(true);
const flickrService = new FlickrService(configJson.flickrApiKey);

export default class FlickrStore {
  @observable public photos: Flickr.Photo[] = [];

  @action
  public async getInterestingPhotos() {
    try {
      const photos = await flickrService.getInterestingnessList();
      runInAction(() => this.photos = photos);
    } catch (error) {
      console.error(error);
    }
  }
}
