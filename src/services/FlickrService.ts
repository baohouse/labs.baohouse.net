/**
 * We use jQuery for AJAX calls because it doesn't generate an OPTIONS
 * preflight request, whereas using the flickr-sdk, which uses
 * superagent, does trigger an OPTIONS request. Sadly, Flickr API
 * doesn't support CORS.
 *
 * We'll want to convert all jQuery Deferred into native Promise.
 */
const FlickrSDK = require("flickr-sdk");
import _ from "lodash";

import Flickr from "models/Flickr";

export default class FlickrService {
  private flickr: any;

  constructor(apiKey: string) {
    this.flickr = new FlickrSDK(apiKey);
  }

  public async getInterestingnessList(): Promise<Flickr.Photo[]> {
    const response: Response = await this.flickr.interestingness.getList({
      extras: "url_c,url_h",
      per_page: 500,
    });
    return _
      .chain(response)
      .get("body.photos.photo")
      .filter((photo: Flickr.Photo) => photo.ispublic)
      .value();
  }
}
