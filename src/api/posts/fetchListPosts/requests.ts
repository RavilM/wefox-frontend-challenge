import { ROOT_ENDPOINT } from '../endpoints';
import { TFetchListPosts } from './types';

export const fetchListPosts: TFetchListPosts = () => fetch(ROOT_ENDPOINT);
