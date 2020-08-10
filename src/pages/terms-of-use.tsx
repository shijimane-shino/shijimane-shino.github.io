import * as React from "react";
import * as Next from "next";

import { Container } from "semantic-ui-react";

import { TermsOfUse as TermsOfUseInterface } from "../interfaces/termsOfUse";

import Layout from "../components/layout";
import Tos from "../components/tos";

import { getAllTermsOfUses } from "../lib/graphcms";

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

export const getStaticProps: Next.GetStaticProps = async (context) => {
  return {
    props: {
      termsOfUses: await getAllTermsOfUses(),
    },
  };
};

export default TermsOfUse;
