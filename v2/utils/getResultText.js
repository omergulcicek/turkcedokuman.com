import { getFilteredItems } from "@/utils"
import items from "./../public/data.json"

export const getResultText = (searchText) => {
  const filteredItems = getFilteredItems(searchText)

  if (searchText === "") {
    return (
      <>
        Toplam
        <b className="ml-1 text-purple-500">{items.length}</b> adet doküman
        bulundu.
      </>
    )
  }
  if (filteredItems.length > 0) {
    return (
      <>
        Toplam
        <b className="ml-1 text-purple-500">{filteredItems.length}</b> adet
        doküman bulundu.
      </>
    )
  } else {
    return <>Hiç doküman bulunamadı 🥲</>
  }
}
