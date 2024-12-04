export type Author = {
  name: string;
  image: string;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type Blog = {
  _id: number;
  title: string;
  body: string;
  cat_id: number;
  image: string;
  created_by: string;
  // tags?: string[];
  created_at: string;
};
