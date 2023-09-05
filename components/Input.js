import { MainContext, useContext } from "./context"

export default function Input() {
  const { searchText, setSearchText, resultText } = useContext(MainContext)

  return (
    <div
      className={`relative mx-2 mb-10  flex flex-col items-center justify-center drop-shadow-sm focus-within:drop-shadow-md transition-all ${
        !!searchText ? "mt-10" : "mt-28 sm:mt-32"
      }`}
    >
      <label className="group relative mb-3 inline-flex w-full items-center rounded-xl border text-neutral-600 sm:w-4/5 md:w-3/5 lg:w-2/5 border-neutral-200 dark:border-neutral-800">
        <input
          className="w-full bg-white dark:bg-neutral-950 dark:text-white p-3 text-base rounded-xl outline-none md:text-sm"
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
