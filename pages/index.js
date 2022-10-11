import Head from "next/head"

import Hero from "./../components/Hero"
import Docs from "./../components/Docs"

export default function Home() {
  return (
    <>
      <Head>
        <title>Türkçe Doküman</title>
        <meta
          name="description"
          content="Yazılım alanında sıfırdan eğitim veren Türkçe dokümanlar"
        />
      </Head>

      <main>
        <Hero />
        <Docs />
      </main>

      <footer></footer>
    </>
  )
}
