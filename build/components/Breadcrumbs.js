import PropTypes from "prop-types";
import React from "react";
import { Link, Route } from "react-router-dom";
const breadCrumbTitles = {
    "": "Home",
};
const BreadcrumbsItem = ({ match }) => {
    const title = breadCrumbTitles[match.url.split("/").slice(-1)[0]];
    const to = title === undefined ? "/" : match.url;
    return (React.createElement("span", null,
        React.createElement(Link, { to: to }, title || "Page Not Found"),
        !match.isExact && title && " / ",
        title &&
            React.createElement(Route, { path: `${match.url === "/" ? "" : match.url}/:path`, component: BreadcrumbsItem })));
};
BreadcrumbsItem.propTypes = {
    match: PropTypes.object.isRequired,
};
const Breadcrumbs = () => (React.createElement(Route, { path: "/", component: BreadcrumbsItem }));
export default Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map