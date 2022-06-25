import { TPosts } from '../../api/posts/types';

type TUseFetchListPostsResult = {
  data: TPosts;
  refetch: VoidFunction;
  loading: boolean;
  isError: boolean;
};

export type TUseFetchListPosts = () => TUseFetchListPostsResult;
