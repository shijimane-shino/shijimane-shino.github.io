import { GraphQLClient } from "graphql-request";

import { Pickup as PickupInterface } from "../interfaces/pickup";
import { Item as ItemInterface } from "../interfaces/item";
import { Credit as CreditInterface } from "../interfaces/credit";
import { TermsOfUse as TermsOfUseInterface } from "../interfaces/termsOfUse";

const doRequest = async <T>(query: string) => {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckdlq6xkqme3z01za6t2fcp7m/master"
  );

  return await graphcms.request<T>(query);
};

export const getAllPickups = async (): Promise<PickupInterface[]> => {
  const data = await doRequest<{
    pickups: PickupInterface[];
  }>(`
    query allPickups {
      pickups(orderBy: updatedAt_DESC) {
        id
        createdAt
        updatedAt
        publishedAt
        title
        url
      }
    }
  `);

  return data.pickups;
};

export const getAllItems = async (): Promise<ItemInterface[]> => {
  const data = await doRequest<{
    items: ItemInterface[];
  }>(`
    query allItems {
      items(orderBy: updatedAt_DESC) {
        id
        createdAt
        updatedAt
        publishedAt
        title
        category
        description
        thumbnail {
          url
        }
        body {
          html
          markdown
        }
        content(orderBy: updatedAt_DESC) {
          id
          createdAt
          updatedAt
          publishedAt
          title
          url
        }
      }
    }
  `);

  return data.items;
};

export const getItem = async (id: string): Promise<ItemInterface | null> => {
  const data = await doRequest<{
    item: ItemInterface | null;
  }>(`
    query Item {
      item(where: {id: "${id}"}) {
        id
        createdAt
        updatedAt
        publishedAt
        title
        category
        description
        thumbnail {
          url
        }
        body {
          html
          markdown
        }
        content(orderBy: updatedAt_DESC) {
          id
          createdAt
          updatedAt
          publishedAt
          title
          url
        }
      }
    }
  `);

  return data.item;
};

export const getAllAuthors = async (): Promise<CreditInterface[]> => {
  const data = await doRequest<{
    credits: CreditInterface[];
  }>(`
    query allAdmin {
      credits(orderBy: id_ASC, where: {author: true}) {
        id
        createdAt
        updatedAt
        publishedAt
        author
        name
        avatar
        work {
          id
          createdAt
          updatedAt
          publishedAt
          name
        }
        link {
          id
          createdAt
          updatedAt
          publishedAt
          name
          url
          category
        }
      }
    }
  `);

  return data.credits;
};

export const getAllStaffs = async (): Promise<CreditInterface[]> => {
  const data = await doRequest<{
    credits: CreditInterface[];
  }>(`
    query allAdmin {
      credits(orderBy: id_ASC, where: {author: false}) {
        id
        createdAt
        updatedAt
        publishedAt
        author
        name
        avatar
        work {
          id
          createdAt
          updatedAt
          publishedAt
          name
        }
        link {
          id
          createdAt
          updatedAt
          publishedAt
          name
          url
          category
        }
      }
    }
  `);

  return data.credits;
};

export const getAllTermsOfUses = async (): Promise<TermsOfUseInterface[]> => {
  const data = await doRequest<{
    termsOfUses: TermsOfUseInterface[];
  }>(`
    query allTermsOfUse {
      termsOfUses(orderBy: sort_ASC) {
        id
        createdAt
        updatedAt
        publishedAt
        sort
        title
        body {
          html
          markdown
        }
      }
    }
  `);

  return data.termsOfUses;
};
