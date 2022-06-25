import { currentPostEndpoint } from '../endpoints';
import { TUpdatePost } from './types';

export const updatePost: TUpdatePost = ({ data, id }) =>
  fetch(currentPostEndpoint(id), {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
