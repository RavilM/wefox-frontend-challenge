import { ReactNode } from 'react';

export type TTableRowProps = {
  children: ReactNode;
  isBody?: boolean;
  onRowClick?(item: number): void;
  id?: number;
  isSelectable?: boolean;
};
