type Title = {
  english: string;
  native: string;
};
type Nodes = {
  name: string;
};
type Studios = {
  nodes: Nodes[];
};
type CoverImage = {
  large: string;
  color: string;
};
type Trailer = {
  id: string;
};
type Tags = {
  name: string;
};
export type AnimeT = {
  id: string;
  title: Title;
  studios: Studios;
  coverImage: CoverImage;
  trailer: Trailer;
  description: string;
  tags: Tags[];
};
