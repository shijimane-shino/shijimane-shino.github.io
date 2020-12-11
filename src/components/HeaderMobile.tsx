import React from "react";
import Link from "next/link";
import { Container, Sidebar, Menu, Icon, Header } from "semantic-ui-react";

import { MenuList } from "../utils/menu";
import styles from "./Header.module.css";

const HeaderMobile: React.FC<{
  title: string | null;
}> = ({ title = null }) => {
  const [visible, setVisible] = React.useState(false);

  const toggle = React.useCallback(() => setVisible(!visible), [
    visible,
    setVisible,
  ]);

  const close = React.useCallback(() => setVisible(false), [setVisible]);

  return (
    <Container className={styles.container}>
      <Menu text size="large">
        <Menu.Menu position="left">
          <Menu.Item>
            <Icon name="sidebar" onClick={toggle} />
          </Menu.Item>
          <Menu.Item>
            <Header as="h1">{title}</Header>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Sidebar
        as={Menu}
        visible={visible}
        animation="overlay"
        direction="left"
        onHide={close}
        vertical
      >
        {MenuList.map((menu, index: number) => (
          <Link key={index} href={menu.href}>
            <Menu.Item name={menu.primary}>
              <Header as="h4">{menu.primary}</Header>
              <p>{menu.secondary}</p>
            </Menu.Item>
          </Link>
        ))}
      </Sidebar>
    </Container>
  );
};

export default HeaderMobile;
