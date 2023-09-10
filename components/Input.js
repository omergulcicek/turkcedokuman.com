import { MainContext, useContext } from "./context"

export default function Input() {
  const { searchText, setSearchText, resultText } = useContext(MainContext)

  return (
    <div
      className={`relative mx-2 mb-10 flex flex-col items-center justify-center drop-shadow-sm focus-within:drop-shadow-md transition-all ${
        !!searchText ? "mt-10" : "mt-10 md:mt-16 lg:mt-28 sm:mt-32"
      }`}
    >
      <label className="group relative mb-3 inline-flex w-full items-center rounded-3xl border bg-neutral-50 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300 sm:w-4/5 md:w-3/5 lg:w-2/5 border-neutral-200 dark:border-neutral-800">
        <input
          className="ml-2 w-full bg-transparent p-3 text-base outline-none placeholder:opacity-60 md:text-sm"
          type="text"
          value={searchText}
          placeholder="Doküman, açıklama yada yazar ara"
          onChange={({ target: { value } }) => setSearchText(value)}
        />
      </label>

      <p className="text-center text-xs text-neutral-500 space-x-1">
        {resultText}
      </p>
    </div>
  )
}
