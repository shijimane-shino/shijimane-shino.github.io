import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

const Layout: React.FC<{
  children?: React.ReactNode;
  title?: string;
  isHeaderTitleDisplay?: boolean;
  isHeader?: boolean;
  isFooter?: boolean;
}> = ({
  children,
  title = null,
  isHeaderTitleDisplay = true,
  isHeader = true,
  isFooter = true,
}) => (
  <div className={styles.container}>
    <Head>
      <title>
        {title && `${title} - `}
        {process.env.TITLE}
      </title>
    </Head>
    {isHeader && <Header title={isHeaderTitleDisplay ? title : null} />}
    <div className={styles.content}>{children}</div>
    {isFooter && <Footer />}
  </div>
);

export default Layout;
