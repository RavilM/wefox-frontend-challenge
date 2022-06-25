import { TPost } from '../../api/posts/types';

type TUseFetchPostResult = {
  data?: TPost;
  refetch(): Promise<void>;
  loading: boolean;
  isError: boolean;
};

export type TUseFetchPost = (id?: number) => TUseFetchPostResult;
