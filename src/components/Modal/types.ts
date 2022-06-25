import { ReactNode } from 'react';

export type TProps = {
  children: ReactNode;
  show: boolean;
  onClose(): void;
};
