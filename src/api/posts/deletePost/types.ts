export type TDeletePostPayload = {
  id: number;
};

export type TDeletePost = (payload: TDeletePostPayload) => Promise<Response>;
