import React from "react";

import { Media, MediaContextProvider } from "../components/Media";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

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
