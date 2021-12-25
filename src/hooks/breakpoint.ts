import { useState, useEffect } from "react";

type Type = {
  // @todo 必要になったら
  // xsOnly: boolean;
  // smOnly: boolean;
  // smAndDown: boolean;
  // smAndUp: boolean;
  // mdOnly: boolean;
  // mdAndDown: boolean;
  // mdAndUp: boolean;
  // lgOnly: boolean;
  // lgAndDown: boolean;
  // lgAndUp: boolean;
  // xlOnly: boolean;

  /**
   * PC 表示の際は true 。
   */
  pc: boolean;

  /**
   * mobile 表示の際は true 。
   */
  mobile: boolean;
};

const mobileBreakpoint = "md";

// @see: assets/styles/breakpoint.scss
const breakpoints = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1264,
  xl: 1904,
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Type>({
    pc: false,
    mobile: false,
  });
  const [resizeObserver, setResizeObserver] = useState<ResizeObserver>();
  const [body, setBody] = useState<HTMLBodyElement>();

  useEffect(() => {
    if (!resizeObserver) {
      setResizeObserver(
        new ResizeObserver((entries) => {
          const [{ contentRect }] = entries;

          setBreakpoint({
            pc: breakpoints[mobileBreakpoint] <= contentRect.width,
            mobile: breakpoints[mobileBreakpoint] > contentRect.width,
          });
        })
      );
    }

    if (!body) {
      setBody(document.querySelector("body") || undefined);
    }

    if (resizeObserver && body) {
      resizeObserver.observe(body);
    }
  });

  return {
    breakpoint,
  };
};
