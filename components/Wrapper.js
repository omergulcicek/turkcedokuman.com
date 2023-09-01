"use client"

import { useState, useMemo } from "react"

import { Input, Cards } from "@/components"
import { getFilteredItems, getResultText } from "@/utils"

import { MainContext } from "./context"

export default function Wrapper() {
  const [searchText, setSearchText] = useState("")

  const resultText = useMemo(() => getResultText(searchText), [searchText])

  const filteredItems = useMemo(
    () => getFilteredItems(searchText),
    [searchText]
  )

  const data = {
    searchText,
    setSearchText,
    resultText,
    filteredItems,
  }

  return (
    <MainContext.Provider value={data}>
      <div className="container mx-auto flex flex-col p-3">
        <Input />
        <Cards />
      </div>
    </MainContext.Provider>
  )
}
