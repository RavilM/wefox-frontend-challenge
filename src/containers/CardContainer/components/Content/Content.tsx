import React, { FC, memo, useCallback, useMemo, useState } from 'react';
import { Card } from '../../../../components/Card';
import './styles.css';
import { FormEdit, TFormEditProps } from '../FormEdit';
import { ControlContainer } from '../../../../components/ControlContainer';
import { TContentProps } from './types';

export const Content: FC<TContentProps> = memo<TContentProps>(
  ({ data, onClose, onSave, onDelete }) => {
    const { content, lat, long, id, title, image_url, created_at, updated_at } =
      data;

    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = useCallback(() => {
      setIsEdit((prevState) => !prevState);
    }, []);

    const textEditButton = useMemo(
      () => (isEdit ? 'Cancel' : 'Edit'),
      [isEdit],
    );

    const handleSave: TFormEditProps['onSave'] = useCallback(
      (changedData) => {
        onSave({
          data: changedData,
          id,
          onSuccess: handleEdit,
        });
      },
      [id, handleEdit, onSave],
    );

    const handleDelete = useCallback(() => {
      onDelete(id);
    }, [id, onDelete]);

    return (
      <>
        {isEdit ? (
          <FormEdit data={data} onCancel={handleEdit} onSave={handleSave} />
        ) : (
          <Card
            content={content}
            created_at={created_at}
            image_url={image_url}
            lat={lat}
            long={long}
            title={title}
            updated_at={updated_at}
          />
        )}
        {!isEdit && (
          <ControlContainer>
            <button onClick={handleEdit} type="submit">
              {textEditButton}
            </button>
            <button onClick={handleDelete} type="submit">
              Delete
            </button>
            <button onClick={onClose} type="submit">
              Close
            </button>
          </ControlContainer>
        )}
      </>
    );
  },
);
