import { TPost } from '../../../../api/posts/types';
import { TUpdate } from '../../../../hooks/useUpdatePost/types';

export type TContentProps = {
  data: TPost;
  onClose(): void;
  onSave: TUpdate;
  onDelete: (id: number) => void;
};
