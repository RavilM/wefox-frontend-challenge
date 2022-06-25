import { TPost } from '../../api/posts/types';
import { TUpdatePostPayload } from '../../api/posts/updatePost';

export type TUpdatePayload = TUpdatePostPayload & {
  onSuccess(): void;
};

export type TUpdate = (payload: TUpdatePayload) => void;

type TUseUpdatePostResult = {
  data?: TPost;
  update: TUpdate;
  loading: boolean;
  isError: boolean;
};

export type TUseUpdatePost = () => TUseUpdatePostResult;
