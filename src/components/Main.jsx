import React from "react"
import { GetDocument } from "./index"

function App({document}) {
  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            <GetDocument document={document} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App