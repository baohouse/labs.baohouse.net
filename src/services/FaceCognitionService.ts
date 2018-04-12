import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from "axios";

export interface IFace {
  faceId: string;
  faceRectangle?: {
    width: number;
    height: number;
    top: number;
    left: number;
  };
}

export interface IVerifyResponse {
  isIdentical: boolean;
  confidence: number; // Range is 0 to 1; multiply by 100 to get percentage
}

export default class FaceCognitionService {
  private axiosInstance: AxiosInstance;

  constructor(subscriptionKey: string, apiUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: apiUrl,
      headers: { "Ocp-Apim-Subscription-Key": subscriptionKey },
    });
  }

  public detectFace(imageAsDataUri: string): Promise<IFace> {
    return fetch(imageAsDataUri)
      .then((img) => img.blob())
      .then((blob) => this.axiosInstance.post("/detect", blob, {
        headers: {
          "Content-Type": "application/octet-stream",
        },
      }))
      .then((res: AxiosResponse) => res.data[0]);
  }

  public compareFaces(faceId1: string, faceId2: string): AxiosPromise<IVerifyResponse> {
    return this.axiosInstance.post("/verify", {
      faceId1,
      faceId2,
    });
  }
}
