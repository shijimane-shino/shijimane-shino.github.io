import React from "react";
import * as Next from "next";
import { Container, Card } from "semantic-ui-react";

import Layout from "../components/Layout";
import ItemCard from "../components/ItemCard";
import * as graphcms from "../utils/graphcms";

import { Media, MediaContextProvider } from "../components/Media";

const ItemCardList: React.FC<{
  items: graphcms.api.Item[];
  itemsPerRow: 1 | 2;
}> = ({ items, itemsPerRow }) => (
  <Card.Group itemsPerRow={itemsPerRow}>
    {items.map((item) => (
      <ItemCard {...item} key={item.id} />
    ))}
  </Card.Group>
);

const Download: Next.NextPage<{
  items: graphcms.api.Item[];
}> = ({ items }) => (
  <Layout title="Download">
    <Container>
      <MediaContextProvider>
        <Media at="xs">
          <ItemCardList items={items} itemsPerRow={1} />
        </Media>
        <Media greaterThan="xs">
          <ItemCardList items={items} itemsPerRow={2} />
        </Media>
      </MediaContextProvider>
    </Container>
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
