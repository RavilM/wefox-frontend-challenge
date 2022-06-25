import React, { FC, useCallback, useState } from 'react';
import { Table } from '../../components/Table';
import { TPost } from '../../api/posts/types';
import { CardContainer } from '../CardContainer';
import { Modal } from '../../components/Modal';
import { columns } from './contants/columns';
import { TProps } from './types';

export const TableViewContainer: FC<TProps> = ({
  data,
  isLoading,
  onUpdate,
}) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState<number | undefined>(undefined);

  const handleRowClick: (id: number) => void = (id) => {
    setShow(true);
    setId(id);
  };

  const handleCloseModal = useCallback(() => {
    setShow(false);
    setId(undefined);
  }, []);

  return (
    <>
      <Table<TPost>
        columns={columns}
        data={data}
        isLoading={isLoading}
        isSelectable
        onRowClick={handleRowClick}
      />
      <Modal onClose={handleCloseModal} show={show}>
        <CardContainer id={id} onClose={handleCloseModal} onUpdate={onUpdate} />
      </Modal>
    </>
  );
};
