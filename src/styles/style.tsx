import PropTypes from "prop-types";
import React from "react";

const link: any = {
  active: "hover",
  focusFromTab: {
    color: "black",
    outline: "2px solid rgb(0, 152, 0)",
    outlineOffset: "2px",
  },
  hover: {
    borderBottom: "1px solid rgb(0, 168, 0)",
    color: "black",
  },
  normal: {
    borderBottom: "1px dotted rgb(0, 168, 0)",
  },
  touchActive: {
    borderBottom: "1px dashed rgb(0, 168, 0)",
    color: "black",
  },
  touchActiveTapOnly: true,
};

const childLink: any = {};
Object.keys(link).forEach((key) => {
  if (key !== "touchActiveTapOnly") {
    childLink[`onParent${key.slice(0, 1).toUpperCase()}${key.slice(1)}`] = link[key];
  }
});

export interface IStyle {
  link: any;
  childLink: any;
  p: any;
}

const style: IStyle = {
  childLink,
  link,
  p: {
    lineHeight: "1.4",
    margin: "3vh 0",
  },
};

export default style;

export interface ICodeArg {
  children?: any;
}

export interface ICode {
  (arg: ICodeArg): JSX.Element;
  propTypes?: any;
}

export const Code: ICode = ({ children }) => (
  <code
    style={{
      fontFamily: "monospace",
      fontSize: "15px",
      paddingLeft: "2px",
    }}
  >{children}</code>
);

Code.propTypes = {
  children: PropTypes.string.isRequired,
};

export interface ILiArg {
  children?: any;
}

export interface ILi {
  (arg: ILiArg): JSX.Element;
  propTypes?: any;
}

export const Li: ILi = ({ children, ...rest }) => (
  <li
    style={{
      listStyle: "none",
      margin: "0.5vh 0",
      paddingLeft: "18px",
      textIndent: "-15px",
    }}
    {...rest}
  >
    <span style={{ paddingRight: "7px" }}>&ndash;</span>
    {children}
  </li>
);

Li.propTypes = {
  children: PropTypes.string.isRequired,
};
