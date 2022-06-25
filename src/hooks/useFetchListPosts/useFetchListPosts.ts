import {useState, useCallback, useEffect} from "react";
import { TPayload, TResult } from './types';
import {fetchListPosts} from "../../api/posts/fetchListPosts";

export function useFetch<TRecord>({ url }: TPayload): any {
    const [data, setData] = useState<TRecord>();
    const [loading, setLoading] = useState(false);

    const fetch = useCallback(async () => {
        setLoading(true);

        try {
            const data = await fetchListPosts();
            
        } catch (e) {

        } finally {
            setLoading(false);
        }


    }, []);

    useEffect(() => {

    }, [])



    return { data, refetch: fetch};
}
