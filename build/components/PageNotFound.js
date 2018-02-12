import PropTypes from "prop-types";
import React from "react";
import s from "styles/pageNotFound.style";
import { Code } from "styles/style";
const propTypes = {
    location: PropTypes.object.isRequired,
};
const PageNotFound = ({ location }) => (React.createElement("p", { style: s.p },
    "Page not found - the path, ",
    React.createElement(Code, null, location.pathname),
    ", did not match any React Router routes."));
PageNotFound.propTypes = propTypes;
export default PageNotFound;
//# sourceMappingURL=PageNotFound.js.map