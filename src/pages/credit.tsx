import * as React from "react";

import * as Next from "next";

import { Container, Grid } from "semantic-ui-react";

import { Credit as CreditInterface } from "../interfaces/credit";

import Layout from "../components/layout";
import CreditCard from "../components/creditCard";

import { getAllAuthors, getAllStaffs } from "../lib/graphcms";

const Credit: Next.NextPage<{
  authors: CreditInterface[];
  staffs: CreditInterface[];
}> = ({ authors, staffs }) => (
  <Layout title="Credit">
    <Container>
      <Grid relaxed columns={1}>
        {authors.map((author) => (
          <Grid.Column key={author.id}>
            <CreditCard {...author} />
          </Grid.Column>
        ))}
      </Grid>
      <Grid relaxed columns={2}>
        {staffs.map((staff) => (
          <Grid.Column key={staff.id}>
            <CreditCard {...staff} />
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  </Layout>
);

export const getStaticProps: Next.GetStaticProps = async () => {
  return {
    props: {
      authors: await getAllAuthors(),
      staffs: await getAllStaffs(),
    },
  };
};

export default Credit;
