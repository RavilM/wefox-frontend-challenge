export type TColumn = {
  dataIndex: string;
  name: string;
};

export type TColumns = TColumn[];

export type TTableProps<TRecord> = {
  isLoading?: boolean;
  data: TRecord[];
  columns: TColumns;
  isSelectable?: boolean;
  onRowClick(item: number): void;
};
