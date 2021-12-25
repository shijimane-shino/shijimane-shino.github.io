import React from "react";

import Image from "next/image";
import styles from "./Index.module.css";
import { useBreakpoint } from "../../hooks/breakpoint";

type Props = {};

const Index: React.VFC<Props> = (props) => {
  const { breakpoint } = useBreakpoint();

  return <></>;
};

export default Index;
