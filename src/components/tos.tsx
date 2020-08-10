import * as React from "react";

import { Header } from "semantic-ui-react";
import { TermsOfUse as TermsOfUseInterface } from "../interfaces/termsOfUse";

import Markdown from "./markdown";

const Tos: React.FunctionComponent<TermsOfUseInterface> = (props) => (
  <>
    <Header as="h2">{props.title}</Header>
    <div className="content">
      <Markdown md={props.body.markdown} />
    </div>
    <style jsx>{`
      .content {
        margin: 0 0 4em 1em;
      }
    `}</style>
  </>
);

export default Tos;
