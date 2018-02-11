import { LocationDescriptorObject } from "history";
const Interactive = require("react-interactive");
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import s from "styles/exampleTwoDeepComponent.style";
import { Li } from "styles/style";

const propTypes = {
  location: PropTypes.object.isRequired,
};

export interface IProps {
  location: LocationDescriptorObject;
}

export interface IExampleTwoDeepComponent {
  (props: IProps): JSX.Element;
  propTypes?: any;
}

const ExampleTwoDeepComponent: IExampleTwoDeepComponent = ({ location }) => {
  const hashPresent: boolean = Boolean(location.hash);
  const queryPresent: boolean = Boolean(location.search);

  function queryStringTitle() {
    if (queryPresent) {
      return "The query string field-value pairs are:";
    }
    return "No query string in the url";
  }

  function hashFragmentTitle() {
    if (hashPresent) {
      return "The hash fragment is:";
    }
    return "No hash fragment in the url";
  }

  function linkToShowQueryAndOrHash() {
    if (queryPresent && hashPresent) {
      return null;
    }

    const queryString = (queryPresent ? location.search : "?field1=foo&field2=bar");
    const hashFragment = (hashPresent ? location.hash : "#boom!");

    let linkText = "";
    if (queryPresent && !hashPresent) {
      linkText = "Show with hash fragment";
    }
    if (!queryPresent && hashPresent) {
      linkText = "Show with query string";
    }
    if (!queryPresent && !hashPresent) {
      linkText = "Show with query string and hash fragment";
    }

    return (
      <div style={s.lineContainer}>
        <Interactive
          as={Link}
          to={`/example/two-deep${queryString}${hashFragment}`}
          {...s.link}
        >{linkText}</Interactive>
      </div>
    );
  }

  function parseQueryString() {
    if (!queryPresent || !location.search) {
      return [];
    }
    return location.search
      .replace("?", "")
      .split("&")
      .map((fvPair) => fvPair.split("="))
      .map((pair) => [pair[0], pair.slice(1).join("=")]);
  }

  return (
    <div>
      <div style={s.lineContainer}>
        <div>{queryStringTitle()}</div>
        <ul>
          {
            parseQueryString().map((pair, index) => (
              <Li key={`${pair[0]}${pair[1]}${index}`}>{`${pair[0]}: ${pair[1]}`}</Li>
            ))
          }
        </ul>
      </div>
      <div style={s.lineContainer}>
        <div>{hashFragmentTitle()}</div>
        <ul>
          {location.hash && <Li>{location.hash.slice(1)}</Li>}
        </ul>
      </div>
      {linkToShowQueryAndOrHash()}
    </div>
  );
};

ExampleTwoDeepComponent.propTypes = propTypes;

export default ExampleTwoDeepComponent;
