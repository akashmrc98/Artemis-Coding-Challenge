export interface Data {
  description: string;
  generator: string;
  items: Images[];
  link: string;
  modified: string;
  title: string;
}

export interface Images {
  author: string;
  author_id: string;
  date_taken: string;
  description: string;
  link: string;
  media: Image;
  published: string;
  tags: string;
  title: string;
}

export interface Image {
  m: string;
}
