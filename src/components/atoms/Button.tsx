import React from "react";

import styles from "./Button.module.scss";

type Props = {
  /**
   * What background color to use
   */
  color?: string;

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
  return (
    <button className={styles.error} type="button">
      {props.label}
    </button>
  );
};

export default Button;
