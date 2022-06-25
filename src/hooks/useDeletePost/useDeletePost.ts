import { useState, useCallback } from 'react';
import { TPost } from '../../api/posts/types';
import { updatePost } from '../../api/posts/updatePost';
import { TUpdate, TUseUpdatePost } from './types';

export const useUpdatePost: TUseUpdatePost = () => {
  const [data, setData] = useState<TPost | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const update: TUpdate = useCallback(async ({ onSuccess, ...rest }) => {
    setLoading(true);
    setIsError(false);

    try {
      const response = await updatePost(rest);
      const json = await response.json();

      setData(json);
      onSuccess();
    } catch (error) {
      console.error(`Error with useUpdatePost: \n ${error}`);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, isError, update };
};
