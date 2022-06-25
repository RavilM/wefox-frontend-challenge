import { TPost } from '../../api/posts/types';

export type TProps = Omit<TPost, 'id'>;
