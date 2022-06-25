export type TPost = {
  id: number;
  title: string;
  content: string;
  lat?: string;
  long?: string;
  image_url?: string;
  created_at: string;
  updated_at: string;
};

export type TPosts = TPost[];

export type TChangePostData = Omit<TPost, 'id' | 'created_at' | 'updated_at'>;
