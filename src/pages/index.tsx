import React from "react";
import * as Next from "next";
import Link from "next/link";
import { Container, Header, List, Button, Image } from "semantic-ui-react";

import { MenuList } from "../utils/menu";
import Layout from "../components/Layout";

import * as graphcms from "../utils/graphcms";
import { Copyright } from "../utils/copyright";

import styles from "./index.module.css";

const Index: Next.NextPage<{
  background: graphcms.api.Asset;
  pickups: graphcms.api.Pickup[];
}> = ({ background, pickups }) => (
  <Layout isHeader={false} isFooter={false}>
    <Container>
      <div className={styles.background}>
        <Image className={styles["background-image"]} src={background.url} />
      </div>
      <div className={styles.container}>
        <div className={styles["title-container"]}>
          <div className={styles["title-header"]}>
            <Header as="h1">
              <Header.Subheader
                className={styles["title-header-subheading-top"]}
              >
                UTAU 向け音声ライブラリ
              </Header.Subheader>
              <Header.Content className={styles["title-header-main"]}>
                <span className={styles["title-header-main-inline"]}>
                  静寂音
                </span>
                <span className={styles["title-header-main-inline"]}>しの</span>
              </Header.Content>
              <Header.Subheader
                className={styles["title-header-subheading-bottom"]}
              >
                Shijimane Shino
              </Header.Subheader>
            </Header>
          </div>
          <div className={styles["link-list"]}>
            <List horizontal link size="big">
              {MenuList.filter((menu) => menu.href !== "/").map(
                (menu, index: number) => (
                  <Link key={index} href={menu.href}>
                    <List.Item as="a">{menu.primary}</List.Item>
                  </Link>
                )
              )}
            </List>
          </div>
          <div className={styles["pickup-list"]}>
            <List horizontal>
              {pickups.map((pickup) => (
                <List.Item key={pickup.id}>
                  <Button href={pickup.url}>{pickup.title}</Button>
                </List.Item>
              ))}
            </List>
          </div>
          <div className={styles["copyright"]}>{Copyright}</div>
        </div>
      </div>
    </Container>
  </Layout>
);

export const getStaticProps: Next.GetStaticProps = async () => ({
  props: {
    background: await graphcms.api.asset({
      where: {
        id: "ckdn3ypuw13f00187r2ubp8eg",
      },
    }),
    pickups: await graphcms.api.pickups({
      orderBy: graphcms.api.PickupOrderByInput.updatedAt_DESC,
    }),
  },
});

export default Index;
