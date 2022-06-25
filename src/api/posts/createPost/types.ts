import { TChangePostData } from '../types';

export type TCreatePost = (data: TChangePostData) => Promise<Response>;
