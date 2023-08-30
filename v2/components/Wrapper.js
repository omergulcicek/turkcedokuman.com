"use client"

import { useState } from "react"

import { Input, Cards } from "@/components"
import { getFilteredItems, getResultText } from "@/utils"

export default function Wrapper() {
  const [searchText, setSearchText] = useState("")

  return (
    <div className="container mx-auto flex min-h-screen flex-col p-3">
      <Input
        searchText={searchText}
        setSearchText={setSearchText}
        resultText={getResultText(searchText)}
      />
      <Cards
        filteredItems={getFilteredItems(searchText)}
        searchText={searchText}
      />
    </div>
  )
}
