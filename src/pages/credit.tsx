import * as React from "react";

import * as Next from "next";

import { Container, Grid } from "semantic-ui-react";

import { GraphQLClient } from "graphql-request";

import { Credit as CreditInterface } from "../interfaces/credit";

import Layout from "../components/layout";
import CreditCard from "../components/creditCard";

const Credit: Next.NextPage<{
  admins: CreditInterface[];
  staffs: CreditInterface[];
}> = ({ admins, staffs }) => (
  <Layout title="Credit">
    <Container>
      <Grid relaxed columns={1}>
        {admins.map((admin) => (
          <Grid.Column key={admin.id}>
            <CreditCard {...admin} />
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

Credit.getInitialProps = async () => {
  const graphcms = new GraphQLClient("https://api-ap-northeast-1.graphcms.com/v2/ckdlq6xkqme3z01za6t2fcp7m/master");

  const admin = await graphcms.request<{ credits: CreditInterface[] }>(`
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

  const staff = await graphcms.request<{ credits: CreditInterface[] }>(`
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

  return {
    admins: admin.credits,
    staffs: staff.credits,
  };
};

export default Credit;
