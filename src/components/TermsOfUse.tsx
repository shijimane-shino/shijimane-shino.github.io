import React from "react";
import { Header } from "semantic-ui-react";

import * as graphcms from "../utils/graphcms";
import Markdown from "./Markdown";

const TermsOfUse: React.FC<graphcms.api.TermsOfUse> = (props) => (
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

export default TermsOfUse;
