import { getFilteredItems } from "@/utils"
import items from "./../public/data.json"

export const getResultText = (searchText) => {
  const itemLenght = items.length - 1
  const filteredItems = getFilteredItems(searchText)
  const filteredItemsLenght = filteredItems.length

  if (searchText === "") {
    return (
      <>
        <span>Toplam</span>
        <b>{itemLenght}</b>
        <span> adet doküman bulundu.</span>
      </>
    )
  }
  if (filteredItemsLenght > 0) {
    return (
      <>
        <span>Toplam</span>
        <b>{filteredItemsLenght}</b>
        <span> adet doküman bulundu.</span>
      </>
    )
  }
}
