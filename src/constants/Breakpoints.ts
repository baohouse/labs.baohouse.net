import { Params } from "react-container-query/lib/interfaces";

enum Breakpoints {
  X_SMALL = "xs",
  SMALL = "sm",
  MEDIUM = "md",
  LARGE = "lg",
  X_LARGE = "xl",
  XX_LARGE = "xxl",
}

const BreakpointsMap = {
  [Breakpoints.X_SMALL]: {
    maxWidth: 576,
  },
  [Breakpoints.SMALL]: {
    maxWidth: 768,
    minWidth: 577,
  },
  [Breakpoints.MEDIUM]: {
    maxWidth: 992,
    minWidth: 769,
  },
  [Breakpoints.LARGE]: {
    maxWidth: 1200,
    minWidth: 993,
  },
  [Breakpoints.X_LARGE]: {
    maxWidth: 1600,
    minWidth: 1201,
  },
  [Breakpoints.XX_LARGE]: {
    minWidth: 1601,
  },
};

export { BreakpointsMap, Params };

export default Breakpoints;
