/* tslint:disable:interface-name */
namespace Flickr {
  export interface Photo {
    height_c: number;
    height_h: number;
    id: string;
    ispublic: number;
    title: string;
    // See https://www.flickr.com/services/api/misc.urls.html
    url_c: string; // 800px longest-side
    url_h: string; // 1600px longest-side
  }
}

export default Flickr;
