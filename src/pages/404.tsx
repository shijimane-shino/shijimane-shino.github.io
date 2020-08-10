import * as React from "react";
import * as Next from "next";

import Link from "next/link";
import { Image, Button } from "semantic-ui-react";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const Error: Next.NextPage = () => (
  <Layout title="Error!" isHeader={false} isFooter={false}>
    <section className="container">
      <Header title="Error!" />
      <div className="content">
        <Image
          src="/img/error.png"
          style={{ width: "400px", margin: "0 auto" }}
        />
        <p>ページが存在しないか、現時点で表示できません。</p>
        <div>
          <Link href="/">
            <Button primary>TOPへ</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
    <style jsx>{`
      .container {
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }
    `}</style>
  </Layout>
);

export default Error;
