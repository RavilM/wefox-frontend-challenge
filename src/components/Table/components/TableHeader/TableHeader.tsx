import React, { FC, memo } from 'react';
import { TableCell } from '../TableCell';
import { TableRow } from '../TableRow';
import { TTableHeaderProps } from './types';
import './styles.css';

export const TableHeader: FC<TTableHeaderProps> = memo<TTableHeaderProps>(
  ({ columns }) => {
    return (
      <div className="table-thead">
        <TableRow>
          {columns.map(({ name, dataIndex }) => (
            <TableCell key={dataIndex} isHeader>
              {name}
            </TableCell>
          ))}
        </TableRow>
      </div>
    );
  },
);
