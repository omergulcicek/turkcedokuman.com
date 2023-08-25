import Wrapper from "../components/Wrapper"
import Brand from "../components/Brand"

export const metadata = {
  title: "Türkçe Doküman",
  description: "Yazılım alanında sıfırdan eğitim veren Türkçe dokümanlar",
}

export default function Page() {
  return (
    <>
      <Brand />
      <Wrapper />
    </>
  )
}
