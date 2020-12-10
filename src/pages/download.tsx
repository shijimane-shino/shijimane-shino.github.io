import React from "react";
import * as Next from "next";

import { Container } from "semantic-ui-react";

import Layout from "../components/Layout";
import ItemCard from "../components/ItemCard";

import * as graphcms from "../utils/graphcms";

const Download: Next.NextPage<{
  items: graphcms.api.Item[];
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

export const getStaticProps: Next.GetStaticProps = async () => ({
  props: {
    items: await graphcms.api.items({
      orderBy: graphcms.api.ItemOrderByInput.updatedAt_DESC,
    }),
  },
});

export default Download;
