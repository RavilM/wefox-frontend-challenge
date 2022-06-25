import { useState, useCallback } from 'react';
import { deletePost } from '../../api/posts/deletePost';
import { TDelete, TUseDeletePost } from './types';

export const useDeletePost: TUseDeletePost = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const deleteFunc: TDelete = useCallback(async ({ onSuccess, ...rest }) => {
    setLoading(true);
    setIsError(false);

    try {
      await deletePost(rest);

      onSuccess();
    } catch (error) {
      console.error(`Error with useDeletePost: \n ${error}`);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, isError, deleteFunc };
};
