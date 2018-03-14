import { action, configure, observable, runInAction } from "mobx";

import Flickr from "models/Flickr";
import FlickrService from "services/FlickrService";

import configJson from "config.json";

configure({ enforceActions: true });
const flickrService = new FlickrService(configJson.flickrApiKey);

export default class FlickrStore {
  @observable public isLoading: boolean = false;
  @observable public photos: Flickr.Photo[] = [];

  @action
  public async getInterestingPhotos(): Promise<void> {
    this.isLoading = true;
    try {
      const photos = await flickrService.getInterestingPhotos();
      runInAction(() => {
        this.photos = photos;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => this.isLoading = false);
    }
  }

  @action
  public async searchPhotosByText(text: string): Promise<void> {
    this.isLoading = true;
    try {
      const photos = await flickrService.searchPhotosByText(text);
      runInAction(() => {
        this.photos = photos;
        this.isLoading = false;
      });
    } catch (error) {
      runInAction(() => this.isLoading = false);
    }
  }
}
