import { useState, useCallback, useEffect } from 'react';
import { TPost } from '../../api/posts/types';
import { fetchPost } from '../../api/posts/fetchPost';
import { TUseFetchPost } from './types';

export const useFetchPost: TUseFetchPost = (id) => {
  const [data, setData] = useState<TPost | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetch = useCallback(async () => {
    if (!id) return;

    setLoading(true);
    setIsError(false);

    try {
      const response = await fetchPost(id);
      const json = await response.json();

      setData(json);
    } catch (error) {
      console.error(`Error with useFetchPost: \n ${error}`);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetch();
  }, []);

  return { data, loading, isError, refetch: fetch };
};
