import React, {Component} from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
const colors = {
  font: "#fff"
};
const Container = styled.header`
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    color: ${colors.font};
    height: 3.5em;
    font-size: 16px;
    display: flex;
    position: fixed;
`;
const Title = styled.h1`
    margin: 0;
    margin-left: 1em;
    padding-top: auto;
    font-size: 2em;
    align-self: center;

    & > a:visited, a:link {
        text-decoration: none;
        color: ${colors.font};
    }
`;
const Spacer = styled.div`
    margin: 0;
    flex-grow: 1;
    height: 1px;
`;
const NavLink = styled(Link)`
    color: ${colors.font};
    font-size: 1.15em;
    margin-left: 0.5em;
    margin-right: 0.5em;
    align-self: center;
    width: 4em;
    text-align: center;
    padding-bottom: 6px;

    &:visited,
    &:link {
        text-decoration: none;
        color: ${colors.font};
    }

    &:after {
        display: block;
        content: '';
        border-bottom: 1px solid white;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }

    &:hover:after {
        transform: scaleX(1);
    }
`;
export class Header extends Component {
  render() {
    return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Title, null, /* @__PURE__ */ React.createElement(Link, {
      to: "/"
    }, "~")), /* @__PURE__ */ React.createElement(Spacer, null), /* @__PURE__ */ React.createElement(NavLink, {
      to: "/projects"
    }, "Projects"), /* @__PURE__ */ React.createElement(NavLink, {
      to: "/posts"
    }, "Posts"), /* @__PURE__ */ React.createElement(NavLink, {
      to: "/about"
    }, "About"));
  }
}
export default Header;
