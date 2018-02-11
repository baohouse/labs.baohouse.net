const Interactive = require("react-interactive");
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import s from "styles/home.style";
import { Code } from "styles/style";

type IrepoReadmeLink = (text: string) => JSX.Element;

export default function Home() {
  const repoReadmeLink: IrepoReadmeLink = (text) => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/rafrex/spa-github-pages#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <Helmet>
        <title>BảoLabs — Home</title>
      </Helmet>
      <p style={s.p}>
        This is an example single page app built
        with React and React&nbsp;Router using {" "}
        <code>BrowserRouter</code>. Navigate with the links below and
        refresh the page or copy/paste the url to test out the redirect
        functionality deployed to overcome GitHub&nbsp;Pages incompatibility
        with single page apps (like this one).
      </p>
      <p style={s.p}>
        Please see the {repoReadmeLink("repo readme")} for instructions on how to
        use this boilerplate to deploy your own single page app using GitHub Pages.
      </p>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example"
        >Example page</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=foo&amp;field2=bar#boom!"
        >Example two deep with query and hash</Interactive>
      </div>
    </div>
  );
}
