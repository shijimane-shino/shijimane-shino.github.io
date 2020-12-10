import React from "react";
import * as Next from "next";

import { Container } from "semantic-ui-react";

import Layout from "../components/Layout";
import * as Tos from "../components/TermsOfUse";

import * as graphcms from "../utils/graphcms";

const TermsOfUse: Next.NextPage<{
  termsOfUses: graphcms.api.TermsOfUse[];
}> = ({ termsOfUses }) => (
  <Layout title="Terms of Use">
    <Container>
      {termsOfUses.map((tos) => (
        <div className="content" key={tos.id}>
          <Tos.default {...tos} />
        </div>
      ))}
    </Container>
  </Layout>
);

export const getStaticProps: Next.GetStaticProps = async () => ({
  props: {
    termsOfUses: await graphcms.api.termsOfUses({
      orderBy: graphcms.api.TermsOfUseOrderByInput.sort_ASC,
    }),
  },
});

export default TermsOfUse;
