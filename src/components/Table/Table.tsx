import React, { ReactElement } from 'react';
import { TTableProps } from './types';
import { TableHeader } from './components/TableHeader';
import { TableBody } from './components/TableBody';

import './styles.css';
import { Loader } from '../Loader';

export function Table<TRecord extends Record<string, unknown>>({
  data,
  columns,
  isLoading,
  isSelectable,
  onRowClick,
}: TTableProps<TRecord>): ReactElement {
  return (
    <Loader isLoading={isLoading}>
      <div className="table">
        <TableHeader columns={columns} />
        <TableBody
          columns={columns}
          data={data}
          isSelectable={isSelectable}
          onRowClick={onRowClick}
        />
      </div>
    </Loader>
  );
}
