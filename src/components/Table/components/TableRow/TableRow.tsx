import React, { FC, memo, useCallback, useMemo } from 'react';
import { TTableRowProps } from './types';
import './styles.css';

export const TableRow: FC<TTableRowProps> = memo(
  ({ children, isBody, onRowClick, id, isSelectable }) => {
    const className = useMemo(() => {
      const defaultName = ['table-row'];

      if (isBody) defaultName.push(`${defaultName[0]}-isBody`);
      if (isSelectable) defaultName.push(`${defaultName[0]}-isSelectable`);

      return defaultName.join(' ');
    }, [isBody]);

    const handleClick = useCallback(() => {
      id && onRowClick?.(id);
    }, [onRowClick]);

    return (
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    );
  },
);
