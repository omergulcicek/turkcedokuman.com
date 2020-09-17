import React, { useState } from "react"

import { Header, Main, Footer } from "./components"


function App() {
  const [document, setDocument] = useState("")

  function handleChange(document) {
    setDocument(document);
  }
  
  return (
    <>
      <Header document={document} onChange={handleChange}/>
      <Main document={document} />
      <Footer/>
    </>
  );
}

export default App
