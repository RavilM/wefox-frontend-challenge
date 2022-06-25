import React, { Key, ReactElement, ReactNode } from 'react';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { columns } from '../../../../containers/TableViewContainer/contants/columns';
import { TProps } from './types';
import './styles.css';

export function TableBody<TRecord extends Record<string, unknown>>({
  data,
  isSelectable,
  onRowClick,
}: TProps<TRecord>): ReactElement {
  if (!data.length) return <div className="caption">No Data</div>;

  return (
    <div className="table-tbody">
      {data.map((item) => (
        <TableRow
          key={item.id as Key}
          id={item.id as number}
          isBody
          isSelectable={isSelectable}
          onRowClick={onRowClick}
        >
          <>
            {columns.map(({ dataIndex }) => (
              <TableCell key={`${item.id}_${dataIndex}`}>
                {item[dataIndex] as ReactNode}
              </TableCell>
            ))}
          </>
        </TableRow>
      ))}
    </div>
  );
}
