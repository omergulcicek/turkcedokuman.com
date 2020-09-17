import React from "react"
import styled from "styled-components"
import { Brand } from "./index"

function App() {
  return (
    <Footer>
      <div className="container">
        <Flex>
          <div>
            <Brand />

            <p>
              <a href="https://omergulcicek.com" target="_blank" rel="noopener noreferrer">Ömer Gülçiçek</a>, { new Date().getFullYear() }
            </p>

            <p>
              MIT lisansı ile lisanslanmıştır.
            </p>

            <p>
              Proje açık kaynak ve kodları GitHub'tadır.
            </p>
          </div>

          <Button href="!#" className="button is-large">Destek Ol</Button>
        </Flex>
      </div>
    </Footer>
  );
}

export default App

const Footer = styled.footer`
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  font-size: 13px;
  padding-bottom: 80px;
  padding-top: 80px;

  p {
    color: var(--c-grey-dark);
    margin-bottom: 0px;

    &:first-of-type {
      margin-top: 24px;
    }

    a {
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Flex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px){
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Button = styled.a`
  background-color: var(--c-red);
  color: #fff;
  margin-top: 32px;

  &:hover {
    color: #fff;
    transform: scale(1.05);
  }

  @media (min-width: 768px){
    margin-top: 0;
  }
`;