import React from "react"
import styled from "styled-components"

function App() {
  return (
    <>
      <Brand>turkcedokuman<span>.com</span></Brand>
      
    </>
  );
}

export default App

const Brand = styled.span`
  color: var(--c-red);
  cursor: default;
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  user-select: none;

  span {
    color: var(--c-black);
  }
`;