import { LocationDescriptorObject } from "history";
import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  location: PropTypes.object.isRequired,
};

export interface IProps {
  location: LocationDescriptorObject;
}

export interface IPageNotFound {
  (props: IProps): JSX.Element;
  propTypes?: any;
}

const PageNotFound: IPageNotFound = ({ location }) => (
  <p>
    Page not found - the path, <code>{location.pathname}</code>,
    did not match any React Router routes.
  </p>
);

PageNotFound.propTypes = propTypes;

export default PageNotFound;
