import React from "react";

import styles from "./Button.module.scss";
import Link, { Props as LinkProps } from "components/atoms/Link";

export type Props = {
  /**
   * 色
   */
  color?: "default" | "primary" | "secondary";

  /**
   * ラベル
   */
  label: string;

  /**
   * クリックハンドラ
   */
  onClick?: () => void;

  /**
   * リンク
   */
  link: LinkProps;
};

const Button: React.VFC<Props> = (props: Props) => {
  const { color, label, link, ...attributes } = props;

  if (link) {
    return (
      <Link {...link}>
        <span
          className={[styles.container, styles[color || "default"]].join(" ")}
          {...attributes}
        >
          {label}
        </span>
      </Link>
    );
  } else {
    return (
      <button
        className={[styles.container, styles[color || "default"]].join(" ")}
        type="button"
        {...attributes}
      >
        {label}
      </button>
    );
  }
};

export default Button;
