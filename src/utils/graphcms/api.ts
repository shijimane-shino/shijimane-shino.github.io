import { GraphQLClient } from "graphql-request";

import * as query from "./queries";

const API_ENDPOINT =
  "https://api-ap-northeast-1.graphcms.com/v2/ckdlq6xkqme3z01za6t2fcp7m/master";

const request = async <T, V>(query: string, variables?: V) => {
  const graphcms = new GraphQLClient(API_ENDPOINT);
  return await graphcms.request<T>(query, variables);
};

export const asset = async (variables: {
  where: AssetWhereUniqueInput;
}): Promise<Asset> => {
  return (
    await request<
      Promise<{
        asset: Asset;
      }>,
      {
        where: AssetWhereUniqueInput;
      }
    >(query.Asset, variables)
  ).asset;
};

export const items = async (variables?: {
  where?: ItemWhereInput;
  orderBy?: ItemOrderByInput;
  before?: string;
  after?: string;
}): Promise<Item[]> => {
  return (
    await request<
      Promise<{
        items: Item[];
      }>,
      {
        where?: ItemWhereInput;
        orderBy?: ItemOrderByInput;
        before?: string;
        after?: string;
      }
    >(query.Items, variables)
  ).items;
};

export const item = async (variables: {
  where: ItemWhereUniqueInput;
}): Promise<Item> => {
  return (
    await request<
      Promise<{
        item: Item;
      }>,
      {
        where: ItemWhereUniqueInput;
      }
    >(query.Item, variables)
  ).item;
};

export const pickups = async (variables?: {
  where?: PickupWhereInput;
  orderBy?: PickupOrderByInput;
  before?: string;
  after?: string;
}): Promise<Pickup[]> => {
  return (
    await request<
      Promise<{
        pickups: Pickup[];
      }>,
      {
        where?: PickupWhereInput;
        orderBy?: PickupOrderByInput;
        before?: string;
        after?: string;
      }
    >(query.Pickups, variables)
  ).pickups;
};

export const staffs = async (variables?: {
  where?: StaffWhereInput;
  orderBy?: StaffOrderByInput;
  before?: string;
  after?: string;
}): Promise<Staff[]> => {
  return (
    await request<
      Promise<{
        staffs: Staff[];
      }>,
      {
        where?: StaffWhereInput;
        orderBy?: StaffOrderByInput;
        before?: string;
        after?: string;
      }
    >(query.Staffs, variables)
  ).staffs;
};

export const termsOfUses = async (variables?: {
  where?: TermsOfUseWhereInput;
  orderBy?: TermsOfUseOrderByInput;
  before?: string;
  after?: string;
}): Promise<TermsOfUse[]> => {
  return (
    await request<
      Promise<{
        termsOfUses: TermsOfUse[];
      }>,
      {
        where?: TermsOfUseWhereInput;
        orderBy?: TermsOfUseOrderByInput;
        before?: string;
        after?: string;
      }
    >(query.TermsOfUses, variables)
  ).termsOfUses;
};

export enum stage {
  Stage,
  Draft,
  Published,
}

export type AssetWhereUniqueInput = {
  id: string;
};

export type ItemWhereInput = {
  // @todo 必要になったら書く
};

export type ItemWhereUniqueInput = {
  id: string;
};

/* eslint-disable camelcase */

export enum ItemOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  title_ASC = "title_ASC",
  title_DESC = "title_DESC",
  category_ASC = "category_ASC",
  category_DESC = "category_DESC",
  description_ASC = "description_ASC",
  description_DESC = "description_DESC",
}

/* eslint-enable camelcase */

export type PickupWhereInput = {
  // @todo 必要になったら書く
};

/* eslint-disable camelcase */

export enum PickupOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  title_ASC = "title_ASC",
  title_DESC = "title_DESC",
  url_ASC = "url_ASC",
  url_DESC = "url_DESC",
}

/* eslint-enable camelcase */

export type StaffWhereInput = {
  author: boolean;
};

/* eslint-disable camelcase */

export enum StaffOrderByInput {
  id_ASC = "id_ASC",
  createdAt_ASC = "createdAt_ASC",
  updatedAt_ASC = "updatedAt_ASC",
  publishedAt_ASC = "publishedAt_ASC",
  author_ASC = "author_ASC",
  name_ASC = "name_ASC",
  avatar_ASC = "avatar_ASC",
  id_DESC = "id_DESC",
  createdAt_DESC = "createdAt_DESC",
  updatedAt_DESC = "updatedAt_DESC",
  publishedAt_DESC = "publishedAt_DESC",
  author_DESC = "author_DESC",
  name_DESC = "name_DESC",
  avatar_DESC = "avatar_DESC",
}

/* eslint-enable camelcase */

export enum LinkCategory {
  twitter = "twitter",
  niconico = "niconico",
  pixiv = "pixiv",
  instagram = "instagram",
  website = "website",
  soundcloud = "soundcloud",
  youtube = "youtube",
  deviantart = "deviantart",
}

export type TermsOfUseWhereInput = {
  // @todo
};

/* eslint-disable camelcase */

export enum TermsOfUseOrderByInput {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",
  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",
  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",
  publishedAt_ASC = "publishedAt_ASC",
  publishedAt_DESC = "publishedAt_DESC",
  sort_ASC = "sort_ASC",
  sort_DESC = "sort_DESC",
  title_ASC = "title_ASC",
  title_DESC = "title_DESC",
}

/* eslint-enable camelcase */

export type RichText = {
  html: string;
  markdown: string;
  text: string;
};

export type Asset = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  handle: string;
  fileName: string;
  height: number;
  width: number;
  size: number;
  mimeType: string;
  url: string;
};

export type Pickup = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  title: string;
  url: string;
};

export type Item = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  title: string;
  category: string;
  description: string;

  thumbnail: Asset;

  body: RichText;

  content: Content[];
};

export type Content = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  title: string;
  url: string;
  post?: Item;
};

export type Staff = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  author: boolean;
  name: string;
  avatar: string;
  link: Link[];
  work: Work[];
};

export type Link = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  name: string;
  url: string;
  category: LinkCategory;
  staff?: Staff;
};
export type Work = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  name: string;

  staff?: Staff;
};

export type TermsOfUse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  sort: number;
  title: string;
  body: RichText;
};
