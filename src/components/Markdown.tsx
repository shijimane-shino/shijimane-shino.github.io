import React from "react";
import ReactMarkdown from "markdown-to-jsx";

import { Header, List, Table, Image } from "semantic-ui-react";
import styles from "./Markdown.module.scss";

const Markdown: React.FC<{
  md: string;
}> = ({ md }) => (
  <ReactMarkdown
    options={{
      overrides: {
        h1: {
          component: function header1(props) {
            return <Header as="h1" {...props} />;
          },
        },
        h2: {
          component: function header2(props) {
            return <Header as="h2" {...props} />;
          },
        },
        h3: {
          component: function header3(props) {
            return <Header as="h3" {...props} />;
          },
        },
        h4: {
          component: function header4(props) {
            return <Header as="h4" {...props} />;
          },
        },
        h5: {
          component: function header5(props) {
            return <Header as="h5" {...props} />;
          },
        },
        h6: {
          component: function header6(props) {
            return <Header as="h6" {...props} />;
          },
        },
        a: {
          component: function anchor(props) {
            return <a {...props} />;
          },
        },
        p: {
          component: function paragraph(props) {
            return <p {...props} />;
          },
        },
        ul: {
          component: function unorderedlist(props) {
            return <List {...props} />;
          },
        },
        li: {
          component: function listitem(props) {
            return <List.Item {...props} />;
          },
        },
        table: {
          component: function table(props) {
            return <Table celled padded {...props} />;
          },
        },
        thead: {
          component: function tablehead(props) {
            return <Table.Header {...props} />;
          },
        },
        tr: {
          component: function tablerow(props) {
            return <Table.Row {...props} />;
          },
        },
        th: {
          component: function tableheader(props) {
            return <Table.HeaderCell {...props} />;
          },
        },
        tbody: {
          component: function tablebody(props) {
            return <Table.Body {...props} />;
          },
        },
        td: {
          component: function tabledata(props) {
            return <Table.Cell {...props} />;
          },
        },
        iframe: {
          component: function inlineframe(props) {
            return <iframe className={styles.iframe} {...props} />;
          },
        },
        img: {
          component: function image(props) {
            return <Image className={styles.image} {...props} />;
          },
        },
      },
    }}
  >
    {md}
  </ReactMarkdown>
);

export default Markdown;
