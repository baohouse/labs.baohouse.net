var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import PropTypes from "prop-types";
import React from "react";
const link = {
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
const childLink = {};
Object.keys(link).forEach((key) => {
    if (key !== "touchActiveTapOnly") {
        childLink[`onParent${key.slice(0, 1).toUpperCase()}${key.slice(1)}`] = link[key];
    }
});
const style = {
    childLink,
    link,
    p: {
        lineHeight: "1.4",
        margin: "3vh 0",
    },
};
export default style;
export const Code = ({ children }) => (React.createElement("code", { style: {
        fontFamily: "monospace",
        fontSize: "15px",
        paddingLeft: "2px",
    } }, children));
Code.propTypes = {
    children: PropTypes.string.isRequired,
};
export const Li = (_a) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (React.createElement("li", Object.assign({ style: {
            listStyle: "none",
            margin: "0.5vh 0",
            paddingLeft: "18px",
            textIndent: "-15px",
        } }, rest),
        React.createElement("span", { style: { paddingRight: "7px" } }, "\u2013"),
        children));
};
Li.propTypes = {
    children: PropTypes.string.isRequired,
};
//# sourceMappingURL=style.js.map