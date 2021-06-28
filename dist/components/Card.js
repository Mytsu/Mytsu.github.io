import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
const Container = styled.div`
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding-left: 2em;
    padding-right: 2em;
`;
function Card(props) {
  return /* @__PURE__ */ React.createElement(Container, {
    className: props.className
  }, props.children);
}
export default Card;
