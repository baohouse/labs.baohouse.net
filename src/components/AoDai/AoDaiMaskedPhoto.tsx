import React from "react";

import Flickr from "models/Flickr";

import AoDaiMask, { AoDaiViewSize } from "./AoDaiMask";

export interface IProps extends Flickr.Photo {
  viewsize?: AoDaiViewSize;
}

const AoDaiMaskedPhoto = ({ title, url_c, viewsize }: IProps) => (
  <AoDaiMask viewsize={viewsize}>
    <img alt={title} src={url_c} />
  </AoDaiMask>
);

export default AoDaiMaskedPhoto;
