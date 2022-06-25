import { TColumns } from '../../types';

export type TProps<TRecord> = {
  data: TRecord[];
  columns: TColumns;
  isSelectable?: boolean;
  onRowClick?(item: number): void;
};
