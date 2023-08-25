"use client"

import { useState, useEffect } from "react"

import Cards from "../components/Cards"
import Input from "../components/Input"
import items from "./../public/data.json"

export default function Wrapper() {
  const [searchText, setSearchText] = useState("")

  const filteredItems = items?.filter(
    ({ title, desc, author }) =>
      title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      desc.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
      author.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  )

  return (
    <>
      <Input searchText={searchText} setSearchText={setSearchText} />
      <Cards filteredItems={filteredItems} searchText={searchText} />
    </>
  )
}
