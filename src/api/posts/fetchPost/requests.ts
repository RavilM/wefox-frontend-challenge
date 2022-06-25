import { currentPostEndpoint } from '../endpoints';
import { TFetchPost } from './types';

export const fetchPost: TFetchPost = (id) => fetch(currentPostEndpoint(id));
