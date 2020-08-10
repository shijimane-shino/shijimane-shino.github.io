export interface CreditLink {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  name: string;
  url: string;
  category:
    | "twitter"
    | "niconico"
    | "pixiv"
    | "instagram"
    | "website"
    | "soundcloud"
    | "youtube"
    | "deviantart";
}
