import React from "react";
import * as Next from "next";

import { Container, Grid } from "semantic-ui-react";

import Layout from "../components/Layout";
import StaffCard from "../components/StaffCard";

import * as graphcms from "../utils/graphcms";

const Credit: Next.NextPage<{
  authors: graphcms.api.Staff[];
  staffs: graphcms.api.Staff[];
}> = ({ authors, staffs }) => (
  <Layout title="Credit">
    <Container>
      <Grid relaxed columns={1}>
        {authors.map((author) => (
          <Grid.Column key={author.id}>
            <StaffCard {...author} />
          </Grid.Column>
        ))}
      </Grid>
      <Grid relaxed columns={2}>
        {staffs.map((staff) => (
          <Grid.Column key={staff.id}>
            <StaffCard {...staff} />
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  </Layout>
);

export const getStaticProps: Next.GetStaticProps = async () => ({
  props: {
    authors: await graphcms.api.staffs({
      where: {
        author: true,
      },
      orderBy: graphcms.api.StaffOrderByInput.name_ASC,
    }),
    staffs: await graphcms.api.staffs({
      where: {
        author: false,
      },
      orderBy: graphcms.api.StaffOrderByInput.name_ASC,
    }),
  },
});

export default Credit;
