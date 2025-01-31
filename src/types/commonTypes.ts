export type BlogPostModel = {
  id: number;
  title: string;
  redirectUrl?: string | undefined;
  imgUrl: string;
  shortDescription: string;
};

export type ImageDisplay = {
  src: string;
  title: string;
  details: string;
  alt?: string;
};
