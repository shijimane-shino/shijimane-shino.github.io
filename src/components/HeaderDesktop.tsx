import React from "react";
import Link from "next/link";
import { Container, Menu, Header } from "semantic-ui-react";

import { MenuList } from "../utils/menu";
import styles from "./Header.module.css";

const HeaderDesktop: React.FC<{
  title: string | null;
}> = ({ title }) => (
  <Container className={styles.container}>
    <Header className={styles["header-desktop"]} as="h1">
      {title}
    </Header>
    <Menu text size="large">
      <Menu.Menu position="left">
        {MenuList.map((menu, index: number) => (
          <Link key={index} href={menu.href}>
            <Menu.Item name={menu.primary} />
          </Link>
        ))}
      </Menu.Menu>
    </Menu>
  </Container>
);

export default HeaderDesktop;
