import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import Card from "./Card.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faMedium
} from "../../_snowpack/pkg/@fortawesome/free-brands-svg-icons.js";
const Container = styled(Card)`
    text-align: center;
    background-color: #242424;

    & > a:visited, a:link {
        text-decoration: none;
        color: white;
    }
`;
const Icon = styled(FontAwesomeIcon)`
    height: 2em;
    width: 2em !important;
    margin: 0;
    padding: 0 0.5em 0 0.5em;
`;
export default function Introduction(props) {
  return /* @__PURE__ */ React.createElement(Container, {
    className: props.className
  }, /* @__PURE__ */ React.createElement("h1", null, "Jonathan Arantes"), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/Mytsu"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: faGithubSquare
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/mytsu/"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: faLinkedin
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.facebook.com/JonhArantes"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: faFacebookSquare
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/JohnMytsu"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: faTwitterSquare
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://medium.com/@mytsu"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: faMedium
  })), /* @__PURE__ */ React.createElement("p", null, "Estudante e desenvolvedor. Atualmente trabalhando em pequenos projetos para preencher este portfólio."));
}
