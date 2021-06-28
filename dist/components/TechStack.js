import React from "../../_snowpack/pkg/react.js";
import Card from "./Card.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {FontAwesomeIcon} from "../../_snowpack/pkg/@fortawesome/react-fontawesome.js";
import {
  faAngular,
  faNodeJs,
  faReact
} from "../../_snowpack/pkg/@fortawesome/free-brands-svg-icons.js";
const Icon = styled(FontAwesomeIcon)`
    height: 3em;
    width: 3em !important;
`;
function TechStack(props) {
  return /* @__PURE__ */ React.createElement(Card, {
    className: props.className
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: faAngular
  }), /* @__PURE__ */ React.createElement(Icon, {
    icon: faReact
  }), /* @__PURE__ */ React.createElement(Icon, {
    icon: faNodeJs
  }));
}
export default TechStack;
