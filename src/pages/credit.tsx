import React from "react";
import * as Next from "next";

import { Container, Card } from "semantic-ui-react";

import Layout from "../components/Layout";
import StaffCard from "../components/StaffCard";

import * as graphcms from "../utils/graphcms";

const Credit: Next.NextPage<{
  authors: graphcms.api.Staff[];
  staffs: graphcms.api.Staff[];
}> = ({ authors, staffs }) => (
  <Layout title="Credit">
    <Container>
      <Card.Group itemsPerRow={1}>
        {authors.map((author) => (
          <StaffCard key={author.id} {...author} />
        ))}
      </Card.Group>

      <Card.Group itemsPerRow={2}>
        {staffs.map((staff) => (
          <StaffCard key={staff.id} {...staff} />
        ))}
      </Card.Group>
    </Container>
  </Layout>
);

export const getStaticProps: Next.GetStaticProps = async () => ({
  props: {
    authors: await graphcms.api.staffs({
      where: {
        author: true,
      },
      orderBy: graphcms.api.StaffOrderByInput.name_DESC,
    }),
    staffs: await graphcms.api.staffs({
      where: {
        author: false,
      },
      orderBy: graphcms.api.StaffOrderByInput.name_DESC,
    }),
  },
});

export default Credit;
