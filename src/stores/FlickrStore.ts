import { action, configure, observable, runInAction } from "mobx";

import Flickr from "models/Flickr";
import FlickrService from "services/FlickrService";

import configJson from "config.json";

configure({ enforceActions: "observed" });
const flickrService = new FlickrService(configJson.flickrApiKey);

export default class FlickrStore {
  @observable public isLoading: boolean = false;
  @observable public isPlaying: boolean = true;
  @observable public photos: Flickr.Photo[] = [];
  public text: string | undefined;

  @action
  public async getInterestingPhotos(): Promise<void> {
    if (this.text === "") {
      return;
    }
    this.isLoading = true;
    this.text = "";

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
    if (this.text === text) {
      return;
    }

    this.isLoading = true;
    this.text = text;

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

  @action
  public togglePlaying(): void {
    this.isPlaying = !this.isPlaying;
  }
}
