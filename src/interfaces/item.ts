import { Content } from "./content";

export interface Item {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  title: string;
  category: string;
  description: string;
  thumbnail?: {
    url: string;
  };
  body: {
    html: string;
    markdown: string;
  };
  content: Content[];
}
