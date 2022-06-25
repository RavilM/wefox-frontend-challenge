import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { TCardContainerProps } from './types';
import './styles.css';
import { useFetchPost } from '../../hooks/useFetchPost';
import { useUpdatePost } from '../../hooks/useUpdatePost';
import { TPost } from '../../api/posts/types';
import { Container } from '../../components/Container';
import { useDeletePost } from '../../hooks/useDeletePost';
import { TContentProps } from './components/Content/types';
import { Content } from './components';

export const CardContainer: FC<TCardContainerProps> = memo<TCardContainerProps>(
  ({ id, onClose, onUpdate }) => {
    const [innerData, setInnerData] = useState<TPost | undefined>(undefined);

    const { data, isError, loading, refetch } = useFetchPost(id);
    const {
      data: updatedData,
      isError: updateIsError,
      loading: updateLoading,
      update,
    } = useUpdatePost();
    const {
      isError: deleteIsError,
      loading: deleteLoading,
      deleteFunc,
    } = useDeletePost();

    useEffect(() => {
      setInnerData(data);
    }, [data]);

    useEffect(() => {
      setInnerData(updatedData);
    }, [updatedData]);

    const handleSave: TContentProps['onSave'] = useCallback(
      ({ onSuccess, ...rest }) => {
        const handleSuccess = () => {
          onSuccess();
          onUpdate();
        };

        update({
          ...rest,
          onSuccess: handleSuccess,
        });
      },
      [onUpdate, update],
    );

    const handleDelete: TContentProps['onDelete'] = useCallback(
      (deleteId) => {
        const handleSuccess = () => {
          onClose();
          onUpdate();
        };

        deleteFunc({
          id: deleteId,
          onSuccess: handleSuccess,
        });
      },
      [deleteFunc, onClose, onUpdate],
    );

    return (
      <Container isLoading={loading || updateLoading || deleteLoading}>
        {!innerData ? (
          <div className="card-load-placeholder" />
        ) : (
          <Content
            data={innerData}
            onClose={onClose}
            onDelete={handleDelete}
            onSave={handleSave}
          />
        )}
      </Container>
    );
  },
);
