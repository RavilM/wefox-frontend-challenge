import {useState, useCallback, useEffect} from "react";
import { TUseFetchListPosts } from './types';
import {fetchListPosts} from "../../api/posts/fetchListPosts";
import {TPosts} from "../../api/posts/types";

export const useFetchListPosts: TUseFetchListPosts = () => {
    const [data, setData] = useState<TPosts>([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const fetch = useCallback(async () => {
        setLoading(true);
        setIsError(false);

        try {
            const response = await fetchListPosts();
            const json = await response.json();

            setData(json);
        } catch (error) {
            console.error(`Error with useFetchListPosts: \n ${error}`)
            setIsError(true);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetch();
    }, []);

    return { data, loading, isError, refetch: fetch};
}
