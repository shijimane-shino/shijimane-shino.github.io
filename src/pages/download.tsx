import * as React from "react";
import * as Next from "next";

import { GraphQLClient } from "graphql-request";

import { Container } from "semantic-ui-react";

import { Item as ItemInterface } from "../interfaces/item";

import Layout from "../components/layout";
import ItemCard from "../components/itemCard";

import { getAllItems } from "../lib/graphcms";

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

export const getStaticProps: Next.GetStaticProps = async (context) => {
  const data = await getAllItems();
  return {
    props: {
      items: data,
    },
  };
};

export default Download;
