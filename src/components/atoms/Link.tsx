import React from "react";

import NextLink, { LinkProps } from "next/link";
import styles from "./Link.module.scss";

export type Props = React.PropsWithChildren<LinkProps>;

const Link: React.VFC<Props> = (props: Props) => {
  const { children, ...attributes } = props;

  return (
    <NextLink {...attributes}>
      <a className={styles.container}>{children}</a>
    </NextLink>
  );
};

export default Link;
