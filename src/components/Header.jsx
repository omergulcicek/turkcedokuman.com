import React from "react"
import styled from "styled-components"
import { Brand } from "./index"

function App(props) {
  return (
    <Header className="header">
      <div className="container">
        <Flex>
          <Brand />

          <Search
            type="text"
            className="input header__search"
            placeholder="Doküman, açıklama yada yazar ara"
            value={props.document}
            onChange={e => props.onChange(e.target.value)}
          />
        </Flex>
      </div>
    </Header>
  );
}

export default App

const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 24px;
  padding-top: 24px;
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

const Search = styled.input`
  background-color: #f9f9f9;
  margin-top: 24px;
  width: 360px;

  @media (min-width: 768px){
    margin-top: 0;
  }
`;