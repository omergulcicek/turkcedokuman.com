import items from "./../public/data.json"

export const getFilteredItems = (searchText) =>
  items
    ?.filter(
      ({ title, desc, author }) =>
        title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
        desc.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
        author.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title, "tr"))
