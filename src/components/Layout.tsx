import React from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

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
  <div className="container">
    <Head>
      <title>
        {title && `${title} - `}
        {process.env.TITLE}
      </title>
    </Head>
    {isHeader && <Header title={isHeaderTitleDisplay ? title : null} />}
    <div className="content">{children}</div>
    {isFooter && <Footer />}
    <style jsx>{`
      .container {
        position: relative;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow: hidden;
      }

      .content {
        flex: 1;
        position: relative;
        overflow-wrap: anywhere;
      }
    `}</style>
  </div>
);

export default Layout;
