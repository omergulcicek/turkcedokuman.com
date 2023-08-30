import { Card, Card2 } from "@/components"
import AddCard from "./AddCard"

export default function Cards({ filteredItems, searchText }) {
  if (!filteredItems.length === 0) return false

  return (
    <>
      <section className="mt-10 flex justify-center flex-wrap">
        {searchText === "123" && <AddCard />}

        {filteredItems?.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </section>
    </>
  )
}
