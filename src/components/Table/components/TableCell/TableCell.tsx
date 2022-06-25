import React, { FC, memo, useMemo } from 'react';
import { TTableCellProps } from './types';
import './styles.css';

export const TableCell: FC<TTableCellProps> = memo<TTableCellProps>(
  ({ isHeader, children }) => {
    const className = useMemo(() => {
      let defaultName = 'table-cell';

      if (isHeader) defaultName += ' table-cell__header';

      return defaultName;
    }, [isHeader]);

    return <div className={className}>{children}</div>;
  },
);
