import { MainContext, useContext } from "./context"

import { Card, NotFound } from "@/components"

export default function Cards() {
  const { filteredItems, searchText } = useContext(MainContext)

  const addCardData = {
    title: "Yeni Doküman Ekle",
    desc: "Doküman eklemek için GitHub yönelgelerini takip edebilirsin. Detaylar için tıkla.",
    url: "https://github.com/omergulcicek/turkcedokuman.com",
    logo: "add-card",
  }

  const filteredItemsLength = filteredItems.length

  if (filteredItemsLength === 0) return <NotFound />

  return (
    <section className="mt-10 flex justify-center flex-wrap">
      {searchText === "" && <Card data={addCardData} isAddCard={true} />}

      {filteredItems?.map((item, index) => (
        <Card data={{ ...item }} key={index} />
      ))}
    </section>
  )
}
