import { ROOT_ENDPOINT } from '../endpoints';
import { TCreatePost } from './types';

export const createPost: TCreatePost = (data) =>
  fetch(ROOT_ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
