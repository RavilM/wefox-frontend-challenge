import { TChangePostData } from '../../../../api/posts/types';

export type TFormEditProps = {
  data?: TChangePostData;
  onCancel: VoidFunction;
  onSave(data: TChangePostData): void;
  isCreate?: boolean;
};
