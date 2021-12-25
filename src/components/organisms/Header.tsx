import React from "react";

import HeaderDesktop from "./Header/Desktop";
import HeaderMobile from "./Header/Mobile";
import { useBreakpoint } from "../../hooks/breakpoint";

type Props = {
  title?: string;
};

const Header: React.VFC<Props> = (props) => {
  const { breakpoint } = useBreakpoint();

  return (
    <>
      {breakpoint.pc ? (
        <HeaderDesktop title={props.title} />
      ) : (
        <HeaderMobile title={props.title} />
      )}
    </>
  );
};

export default Header;
