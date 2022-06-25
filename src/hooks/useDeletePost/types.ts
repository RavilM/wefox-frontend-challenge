import { TDeletePostPayload } from '../../api/posts/deletePost';

export type TDeletePayload = TDeletePostPayload & {
  onSuccess: VoidFunction;
};

export type TDelete = (payload: TDeletePayload) => void;

type TUseDeletePostResult = {
  deleteFunc: TDelete;
  loading: boolean;
  isError: boolean;
};

export type TUseDeletePost = () => TUseDeletePostResult;
