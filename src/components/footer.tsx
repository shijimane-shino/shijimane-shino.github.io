import * as React from "react";

import * as Scroll from "react-scroll";

import { Container, Menu, Icon } from "semantic-ui-react";

const Footer: React.FC = () => (
  <Menu text style={{ margin: "2.5rem 0" }}>
    <Container>
      <Menu.Item position="left">
        © {new Date().getFullYear()} {process.env.AUTHOR} / {process.env.TITLE}
      </Menu.Item>
      <Menu.Item position="right">
        <Icon
          name="chevron up"
          onClick={() => Scroll.animateScroll.scrollToTop()}
        />
      </Menu.Item>
    </Container>
  </Menu>
);

export default Footer;
