import { MainContext, useContext } from "./context"

import { AddCard, Card, NotFound } from "@/components"

export default function Cards() {
  const { searchText, filteredItems } = useContext(MainContext)
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
      {/* {searchText === "" && <AddCard />} */}

      {filteredItems?.map((item, index) => (
        <Card
          data={index === 0 ? addCardData : { ...item }}
          key={index}
          isAddCard={index === 0}
        />
      ))}
    </section>
  )
}
