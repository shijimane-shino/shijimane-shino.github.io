import * as React from "react";
import * as Next from "next";

import { GraphQLClient } from "graphql-request";

import { Container } from "semantic-ui-react";

import { Item as ItemInterface } from "../interfaces/item";

import Layout from "../components/layout";
import ItemCard from "../components/itemCard";

const Download: Next.NextPage<{
  items: ItemInterface[];
}> = ({ items }) => (
  <Layout title="Download">
    <Container>
      <div className="container">
        {items.map((item) => (
          <div className="content" key={item.id}>
            <ItemCard {...item} />
          </div>
        ))}
      </div>
    </Container>
    <style jsx>{`
      .container {
        column-width: 30em;
        column-gap: 1rem;
      }

      .content {
        display: inline-block;
        padding: 0.5rem 0;
        width: 100%;
      }
    `}</style>
  </Layout>
);

Download.getInitialProps = async (context: Next.NextPageContext): Promise<any> => {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL);

  const data = await graphcms.request<{ items: ItemInterface[] }>(`
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

  return {
    items: data.items,
  };
};

export default Download;
