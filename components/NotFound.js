import { MainContext, useContext } from "./context"

export default function NotFound() {
  const { searchText, setSearchText } = useContext(MainContext)

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-4">
        <p className="text-3xl">
          <span className="text-red-600">"{searchText}"</span> için bir sonuç
          bulunamadı 🥲
        </p>
        <p>Başka bir kelime arayabilirsin.</p>

        <div className="flex gap-3">
          <button
            onClick={() => setSearchText("")}
            className="inline-flex justify-center rounded-lg border px-4 py-2 text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
          >
            Aramayı temizle
          </button>

          <button
            onClick={() => setSearchText("")}
            className="inline-flex justify-center rounded-lg px-4 py-2 text-sm outline-2 outline-offset-2 transition-colors border-gray-300 hover:border-gray-400 bg-red-500 text-white active:bg-gray-100 active:text-gray-700/80"
          >
            Yeni bir Türkçe doküman eklemek istiyorum!
          </button>
        </div>
      </section>
    </>
  )
}
