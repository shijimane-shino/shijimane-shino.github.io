import React from "react";
import * as Scroll from "react-scroll";
import { Container, Menu, Icon } from "semantic-ui-react";

import { Copyright } from "../utils/copyright";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <Container className={styles.container}>
    <Menu text>
      <Menu.Item position="left">{Copyright}</Menu.Item>
      <Menu.Item position="right">
        <Icon
          className={styles.pointer}
          name="chevron up"
          onClick={() => Scroll.animateScroll.scrollToTop()}
        />
      </Menu.Item>
    </Menu>
  </Container>
);

export default Footer;
