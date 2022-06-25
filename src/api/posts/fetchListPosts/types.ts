import { TPost } from '../types';

export type  TCreatePostPayload = Omit<TPost, 'id'>

export  type  TCreatePost = (data: TCreatePostPayload) => Promise<Response>
