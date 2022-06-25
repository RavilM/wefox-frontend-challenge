export const ROOT_ENDPOINT = 'api/v1/posts';

export const currentPostEndpoint = (id: number) => `${ROOT_ENDPOINT}/${id}`;
