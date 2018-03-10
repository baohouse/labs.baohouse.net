import { action, observable, runInAction, useStrict } from "mobx";

import FaceCognitionService, { IFace } from "services/FaceCognitionService";

import configJson from "config.json";

useStrict(true);
const faceCognitionService = new FaceCognitionService(configJson.microsoftFaceApiKey);

interface IPhoto extends IFace {
  data: string;
}

const TRANSPARENT_IMAGE =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

export default class FlickrStore {
  @observable public isLoading: boolean = false;
  @observable public matchConfidence?: number;
  @observable public photo1: IPhoto = {
    data: TRANSPARENT_IMAGE,
    faceId: "",
  };
  @observable public photo2: IPhoto = {
    data: TRANSPARENT_IMAGE,
    faceId: "",
  };

  @action
  public async getFaceMatchConfidence(): Promise<void> {
    this.isLoading = true;
    try {
      const detectResult = await Promise.all([
        this.getFaceDetectionDetails(this.photo1),
        this.getFaceDetectionDetails(this.photo2),
      ]);
      runInAction(() => {
        this.photo1 = {
          ...this.photo1,
          ...detectResult[0],
        };
        this.photo2 = {
          ...this.photo2,
          ...detectResult[1],
        };
      });

      const faceId1 = detectResult[0].faceId;
      const faceId2 = detectResult[1].faceId;
      if (faceId1 && faceId2) {
        const verifyResult = await faceCognitionService.compareFaces(faceId1, faceId2);
        runInAction(() => {
          this.isLoading = false;
          this.matchConfidence = verifyResult.data.confidence;
        });
      } else {
        runInAction(() => this.isLoading = false);
      }
    } catch (error) {
      runInAction(() => this.isLoading = false);
    }
  }

  private async getFaceDetectionDetails(photo: IPhoto): Promise<IPhoto> {
    if (photo.data !== TRANSPARENT_IMAGE && !photo.faceId) {
      const result = await faceCognitionService.detectFace(photo.data);
      return {
        ...photo,
        ...result,
      };
    } else {
      return photo;
    }
  }
}
