import { TPosts } from '../../api/posts/types';
import { TCardContainerProps } from '../CardContainer/types';

export type TProps = {
  isLoading?: boolean;
  data: TPosts;
} & Pick<TCardContainerProps, 'onUpdate'>;
