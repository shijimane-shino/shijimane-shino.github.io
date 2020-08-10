import * as React from "react";

import Head from "next/head";

import Header from "./header";
import Footer from "./footer";

const Layout: React.FC<{
  children?: React.ReactNode;
  title?: string;
  isHeader?: boolean;
  isFooter?: boolean;
}> = ({ children, title = null, isHeader = true, isFooter = true }) => (
  <div className="container">
    <Head>
      <title>
        {title && `${title} - `}
        {process.env.TITLE}
      </title>
    </Head>
    {isHeader && <Header title={title} />}
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
