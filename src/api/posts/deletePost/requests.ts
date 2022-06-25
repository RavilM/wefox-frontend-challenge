import { currentPostEndpoint } from '../endpoints';
import { TDeletePost } from './types';

export const deletePost: TDeletePost = ({ id }) =>
  fetch(currentPostEndpoint(id), {
    method: 'DELETE',
  });
