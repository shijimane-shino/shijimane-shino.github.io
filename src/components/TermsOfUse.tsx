import React from "react";
import { Header } from "semantic-ui-react";

import * as graphcms from "../utils/graphcms";
import Markdown from "./Markdown";
import styles from "./TermsOfUse.module.css";

const TermsOfUse: React.FC<graphcms.api.TermsOfUse> = (props) => (
  <>
    <Header as="h2">{props.title}</Header>
    <div className={styles.content}>
      <Markdown md={props.body.markdown} />
    </div>
  </>
);

export default TermsOfUse;
