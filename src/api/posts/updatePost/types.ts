import {TChangePostData} from '../types';

export type TUpdatePostPayload = {
  id: number;
  data: TChangePostData;
};

export type TUpdatePost = (data: TUpdatePostPayload) => Promise<Response>;
