import { TChangePostData, TPost } from '../../api/posts/types';

export type TCreatePayload = TChangePostData & {
  onSuccess: VoidFunction;
};

export type TCreate = (payload: TCreatePayload) => void;

type TUseCreatePostResult = {
  data?: TPost;
  create: TCreate;
  loading: boolean;
  isError: boolean;
};

export type TUseCreatePost = () => TUseCreatePostResult;
