import * as React from "react";

import Link from "next/link";

import { Media, MediaContextProvider } from "../components/media";

import { Container, Sidebar, Menu, Icon, Header as H } from "semantic-ui-react";

export const MenuList = [
  {
    primary: "Top",
    secondary: "TOP ページ",
    href: "/",
  },
  {
    primary: "Download",
    secondary: "音源や各種素材のダウンロード",
    href: "/download",
  },
  {
    primary: "Credit",
    secondary: "製作関係者",
    href: "/credit",
  },
  {
    primary: "Terms of Use",
    secondary: "利用規約",
    href: "/terms-of-use",
  },
];

const HeaderMobile: React.FC<{
  title?: string;
}> = ({ title = null }) => {
  const [visible, setVisible] = React.useState(false);

  const toggle = React.useCallback(() => setVisible(!visible), [
    visible,
    setVisible,
  ]);

  const close = React.useCallback(() => setVisible(false), [setVisible]);

  return (
    <>
      <Menu text size="large" style={{ margin: "0 1em", height: "10rem" }}>
        <Container>
          <Menu.Item position="left">
            <Icon name="sidebar" onClick={toggle} />
          </Menu.Item>
          {title && (
            <Menu.Item position="right">
              <H as="h1" style={{ margin: 0, lineHeight: "10rem" }}>
                {title}
              </H>
            </Menu.Item>
          )}
        </Container>
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
              <H as="h4">{menu.primary}</H>
              <p>{menu.secondary}</p>
            </Menu.Item>
          </Link>
        ))}
      </Sidebar>
    </>
  );
};

const HeaderDesktop: React.FC<{
  title: string | null;
}> = ({ title }) => (
  <Menu text size="large" style={{ margin: 0, height: "10rem" }}>
    <Container>
      {title && (
        <H as="h1" style={{ margin: "0 1em", lineHeight: "10rem" }}>
          {title}
        </H>
      )}
      <Menu.Menu position="right">
        {MenuList.map((menu, index: number) => (
          <Link key={index} href={menu.href}>
            <Menu.Item name={menu.primary} />
          </Link>
        ))}
      </Menu.Menu>
    </Container>
  </Menu>
);

const Header: React.FC<{
  title: string | null;
}> = ({ title = null }) => (
  <MediaContextProvider>
    <Media at="xs">
      <HeaderMobile title={title} />
    </Media>
    <Media greaterThan="xs">
      <HeaderDesktop title={title} />
    </Media>
  </MediaContextProvider>
);

export default Header;
