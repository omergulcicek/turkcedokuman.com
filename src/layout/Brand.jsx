import React from "react"
import styled from "styled-components"

function App() {
  return (
    <Brand href="!#">turkcedokuman<span>.com</span></Brand>
  );
}

export default App

const Brand = styled.a`
  color: var(--c-red);
  cursor: pointer;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;

  span {
    color: var(--c-black);
  }

  &:hover {
    color: var(--c-red);
  }
`;