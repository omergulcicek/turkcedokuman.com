import Card from "./Card"
import AddCard from "./AddCard"

export default function Cards({ filteredItems, searchText }) {
  if (!filteredItems.length === 0) return false

  return (
    <>
      <section className="w-3/4 max-w-7xl m-auto grid grid-cols-4 gap-4">
        {searchText === "" && <AddCard />}

        {filteredItems?.map((item, index) => (
          <Card {...item} key={index} />
        ))}
      </section>
    </>
  )
}
