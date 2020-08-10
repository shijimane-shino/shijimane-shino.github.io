export interface TermsOfUse {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  sort: number;
  title: string;
  body: {
    html: string;
    markdown: string;
  };
}
