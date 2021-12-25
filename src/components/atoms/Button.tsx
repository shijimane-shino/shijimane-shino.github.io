import React from "react";

import styles from "./Button.module.scss";

export type Props = {
  /**
   * What background color to use
   */
  color?: "default" | "primary" | "secondary";

  /**
   * Button contents
   */
  label: string;

  /**
   * Optional click handler
   */
  onClick?: () => void;
};

const Button: React.VFC<Props> = (props: Props) => {
  const { color, label, ...attributes } = props;

  return (
    <button
      className={[styles.container, styles[color || "default"]].join(" ")}
      type="button"
      {...attributes}
    >
      {label}
    </button>
  );
};

export default Button;
