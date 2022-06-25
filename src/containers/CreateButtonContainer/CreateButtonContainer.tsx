import React, { FC, memo, useCallback, useState } from 'react';
import { Modal } from '../../components/Modal';
import { Container } from '../../components/Container';
import { FormEdit, TFormEditProps } from '../CardContainer/components';
import { useCreatePost } from '../../hooks/useCreatePost';
import { TProps } from './types';

export const CreateButtonContainer: FC<TProps> = memo<TProps>(
  ({ onCreate }) => {
    const [show, setShow] = useState(false);

    const { data, isError, loading, create } = useCreatePost();

    const handleOpenModal = useCallback(() => {
      setShow(true);
    }, []);

    const handleCloseModal = useCallback(() => {
      setShow(false);
    }, []);

    const handleSave: TFormEditProps['onSave'] = useCallback(
      (newData) => {
        const handleSuccess = () => {
          onCreate();
          handleCloseModal();
        };

        create({
          ...newData,
          onSuccess: handleSuccess,
        });
      },
      [create, handleCloseModal, onCreate],
    );

    return (
      <>
        <button onClick={handleOpenModal} type="button">
          Add new Post
        </button>
        <Modal onClose={handleCloseModal} show={show}>
          <Container isLoading={loading}>
            <FormEdit
              isCreate
              onCancel={handleCloseModal}
              onSave={handleSave}
            />
          </Container>
        </Modal>
      </>
    );
  },
);
