export type Image = {
  id: number;
  src: string;
};

export type Project = {
  id: number;
  title: string;
  images: Image[];
};
