import * as React from "react";
import * as Next from "next";

import Link from "next/link";

import { Header as H, Menu, Button, Image } from "semantic-ui-react";

import { GraphQLClient } from "graphql-request";

import { Pickup as PickupInterface } from "../interfaces/pickup";

import { MenuList } from "../components/header";
import Footer from "../components/footer";
import Layout from "../components/layout";

const TopHeader: React.FC<{
  pickups: PickupInterface[];
}> = ({ pickups }) => (
  <>
    <div className="container">
      <div className="header">
        <H as="h5" style={{ margin: 0, letterSpacing: "0.25em" }}>
          UTAU 向け音声ライブラリ
        </H>
        <H
          as="h1"
          size="huge"
          style={{ margin: "0.2em 0", fontSize: "5rem", fontWeight: "normal" }}
        >
          <span style={{ display: "inline-block" }}>静寂音</span>
          <span style={{ display: "inline-block" }}>しの</span>
        </H>
        <H as="h5" style={{ margin: 0, letterSpacing: "0.5em" }}>
          Shijimane Shino
        </H>
        <div className="link-list">
          <Menu
            text
            size="large"
            style={{ margin: 0, justifyContent: "center", minHeight: "1em" }}
          >
            {MenuList.filter((menu) => menu.href !== "/").map(
              (menu, index: number) => (
                <Link key={index} href={menu.href}>
                  <Menu.Item style={{ padding: "0 1em" }} name={menu.primary} />
                </Link>
              )
            )}
          </Menu>
        </div>
        <div className="pickup-list">
          {pickups.map((pickup) => (
            <Button key={pickup.id} href={pickup.url} primary>
              {pickup.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      .container {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
      }

      .header {
        backdrop-filter: blur(10px);
        background-color: rgba(250, 250, 250, 0.25);
        padding: 1em 0;
      }

      .link-list {
        margin: 1em 0 0;
        padding: 1em 0 0;
        border-top: 1px solid rgb(158, 158, 158);
      }

      .pickup-list {
        margin: 1em 0 0;
      }
    `}</style>
  </>
);

const BackgroundImage: React.FC<{
  url: string;
}> = (props) => (
  <>
    <div className="header-image">
      <Image
        src={props.url}
        style={{
          left: "50%",
          minWidth: "50%",
          minHeight: "100vh",
          objectFit: "contain",
        }}
      />
    </div>
    <style jsx>{`
      .header-image {
        position: relative;
        opacity: 0.5;
        height: 0;
        z-index: -1;
        overflow: inherit;
      }
    `}</style>
  </>
);

const Index: Next.NextPage<{
  pickups: PickupInterface[];
}> = ({ pickups }) => (
  <Layout isHeader={false} isFooter={false}>
    <section className="container">
      <BackgroundImage url="https://media.graphcms.com/zgzHeR1RcWcTQsGr49Ba" />
      <TopHeader pickups={pickups} />
      <Footer />
    </section>
    <style jsx>{`
      .container {
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </Layout>
);

Index.getInitialProps = async () => {
  const graphcms = new GraphQLClient("https://api-ap-northeast-1.graphcms.com/v2/ckdlq6xkqme3z01za6t2fcp7m/master");

  const data = await graphcms.request<{ pickups: PickupInterface[] }>(`
    query allPickups {
      pickups(orderBy: updatedAt_DESC) {
        id
        createdAt
        updatedAt
        publishedAt
        title
        url
      }
    }
  `);

  return {
    pickups: data.pickups,
  };
};

export default Index;
