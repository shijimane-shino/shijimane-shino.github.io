import React from "react";

import styles from "./Heading.module.scss";

export type Props = React.PropsWithChildren<{
  /**
   * 見出し
   */
  as: "1" | "2" | "3" | "4" | "5" | "6";
}>;

const Heading: React.VFC<Props> = (props: Props) => {
  const { as, children, ...attributes } = props;
  const HeadingTag: React.ElementType = `h${as}`;

  return (
    <HeadingTag
      className={styles[HeadingTag]}
      {...attributes}
    >
      {children}
    </HeadingTag>
  );
};

export default Heading;
