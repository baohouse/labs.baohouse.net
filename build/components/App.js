import { Spinner } from "@blueprintjs/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import s from "styles/app.style";
import Breadcrumbs from "./Breadcrumbs";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
export default function App() {
    return (React.createElement("div", { style: s.root },
        React.createElement("h1", { style: s.title },
            React.createElement("img", { src: "/images/baolabs-logo.svg", alt: "B\u1EA2OLABS" })),
        React.createElement("nav", { style: s.breadcrumbs },
            React.createElement(Breadcrumbs, null)),
        React.createElement(Spinner, null),
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/", component: Home }),
            React.createElement(Route, { component: PageNotFound }))));
}
//# sourceMappingURL=App.js.map