import axios, { AxiosInstance, AxiosResponse } from "axios";

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

  public async detectFace(imageAsDataUri: string): Promise<IFace> {
    const img: Body = await fetch(imageAsDataUri);
    const blob: Blob = await img.blob();
    const response: AxiosResponse<IFace[]> =
      await this.axiosInstance.post<IFace[]>("/detect", blob, {
        headers: { "Content-Type": "application/octet-stream" },
      });
    return Promise.resolve(response.data[0]);
  }

  public async compareFaces(faceId1: string, faceId2: string): Promise<IVerifyResponse> {
    const response: AxiosResponse<IVerifyResponse> =
      await this.axiosInstance.post<IVerifyResponse>("/verify", {
        faceId1,
        faceId2,
      });
    return Promise.resolve(response.data);
  }
}
