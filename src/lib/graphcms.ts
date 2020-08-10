import { GraphQLClient } from "graphql-request";

import { Item as ItemInterface } from "../interfaces/item";

const doRequest = async <T>(query: string) => {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckdlq6xkqme3z01za6t2fcp7m/master"
  );

  return await graphcms.request<T>(query);
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
