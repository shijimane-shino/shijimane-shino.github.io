import React from "react";
import * as Next from "next";
import Link from "next/link";
import { Image, Button } from "semantic-ui-react";

import Layout from "../components/Layout";
import styles from "./_error.module.scss";

const Error: Next.NextPage = () => (
  <Layout title="Error!" isHeader={false} isFooter={false}>
    <div className={styles.container}>
      <div className={styles.content}>
        <Image className={styles.image} src="/img/error.png" />
        <p>ページが存在しないか、現時点で表示できません。</p>
        <Link href="/">
          <Button>TOPへ</Button>
        </Link>
      </div>
    </div>
  </Layout>
);

export default Error;
