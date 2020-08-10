import { CreditLink } from "./creditLink";
import { CreditWork } from "./creditWork";

export interface Credit {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  author: boolean;
  name: string;
  avatar: string;
  link: CreditLink[];
  work: CreditWork[];
}
