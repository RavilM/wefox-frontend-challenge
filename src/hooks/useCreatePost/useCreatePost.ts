import { useState, useCallback } from 'react';
import { TPost } from '../../api/posts/types';
import { createPost } from '../../api/posts/createPost';
import { TCreate, TUseCreatePost } from './types';

export const useCreatePost: TUseCreatePost = () => {
  const [data, setData] = useState<TPost | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const create: TCreate = useCallback(async ({ onSuccess, ...rest }) => {
    setLoading(true);
    setIsError(false);

    try {
      const response = await createPost(rest);
      const json = await response.json();

      setData(json);
      onSuccess();
    } catch (error) {
      console.error(`Error with useCreatePost: \n ${error}`);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, isError, create };
};
