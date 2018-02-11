const Interactive = require("react-interactive");
import PropTypes from "prop-types";
import React from "react";
import { Link, match as Imatch, Route } from "react-router-dom";

import s from "styles/style";

interface IBreadcrumbTitles {
  [titles: string]: string;
}

const breadCrumbTitles: IBreadcrumbTitles = {
  "": "Home",
};

interface IProps {
  match: Imatch<any>;
}

interface IBreadcrumbsItem {
  (props: IProps): JSX.Element;
  propTypes?: any;
}

const BreadcrumbsItem: IBreadcrumbsItem = ({ match }) => {
  const title = breadCrumbTitles[match.url.split("/").slice(-1)[0]];
  const to = title === undefined ? "/" : match.url;

  return (
    <span>
      <Interactive
        as={Link}
        {...s.link}
        to={to}
      >{title || "Page Not Found"}</Interactive>
      {!match.isExact && title && " / "}
      {title &&
        <Route path={`${match.url === "/" ? "" : match.url}/:path`} component={BreadcrumbsItem} />
      }
    </span>
  );
};

BreadcrumbsItem.propTypes = {
  match: PropTypes.object.isRequired,
};

const Breadcrumbs = () => (
  <Route path="/" component={BreadcrumbsItem}/>
);

export default Breadcrumbs;
