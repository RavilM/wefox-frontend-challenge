import {TPosts} from "../../api/posts/types";

type TUseFetchListPostsResult = {
    data: TPosts;
    refetch(): Promise<void>;
    loading: boolean;
    isError: boolean;
}

export type TUseFetchListPosts = () => TUseFetchListPostsResult
