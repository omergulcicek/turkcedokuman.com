import React from "react"
import styled from "styled-components"

import { GetDocument } from "./index"

function App({document}) {
  return (
    <main>
      <div className="container">
        <Grid>
          <GetDocument document={document} />
        </Grid>
      </div>
    </main>
  );
}

export default App

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
`;