import { MainContext, useContext } from "./context"

import { Card } from "@/components"
import AddCard from "./AddCard"

export default function Cards() {
  const { searchText, filteredItems } = useContext(MainContext)

  const filteredItemsLength = filteredItems.length

  if (filteredItemsLength === 0) return false

  return (
    <section className="mt-10 flex justify-center flex-wrap">
      {searchText === "" && <AddCard />}

      {filteredItems?.map((item, index) => (
        <Card {...item} key={index} />
      ))}
    </section>
  )
}
