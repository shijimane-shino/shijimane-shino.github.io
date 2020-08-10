import * as React from "react";
import * as Next from "next";

import { Container } from "semantic-ui-react";

import { GraphQLClient } from "graphql-request";

import { TermsOfUse as TermsOfUseInterface } from "../interfaces/termsOfUse";

import Layout from "../components/layout";
import Tos from "../components/tos";

const TermsOfUse: Next.NextPage<{
  termsOfUses: TermsOfUseInterface[];
}> = ({ termsOfUses }) => (
  <Layout title="Terms of Use">
    <Container>
      {termsOfUses.map((tos) => (
        <div className="content" key={tos.id}>
          <Tos {...tos} />
        </div>
      ))}
    </Container>
  </Layout>
);

TermsOfUse.getInitialProps = async () => {
  const graphcms = new GraphQLClient(
    "https://api-ap-northeast-1.graphcms.com/v2/ckdlq6xkqme3z01za6t2fcp7m/master"
  );

  const data = await graphcms.request<{ termsOfUses: TermsOfUseInterface[] }>(`
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

  return {
    termsOfUses: data.termsOfUses,
  };
};

export default TermsOfUse;
