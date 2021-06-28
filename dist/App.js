import React from "../_snowpack/pkg/react.js";
import {BrowserRouter as Router, Switch, Route} from "../_snowpack/pkg/react-router-dom.js";
import {Header, Particles, Welcome} from "./components/index.js";
import About from "./components/About.js";
import Posts from "./components/Posts.js";
import Projects from "./components/Projects.js";
export default function App() {
  return /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Particles, null), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/",
    component: Welcome
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/projects",
    component: Projects
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/posts",
    component: Posts
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/about",
    component: About
  })));
}
