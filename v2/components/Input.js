export default function Input({ searchText, setSearchText }) {
  return (
    <>
      <input
        className="border text-black w-80 h-10 p-2 rounded"
        type="text"
        value={searchText}
        placeholder="Doküman, açıklama yada yazar ara"
        onChange={({ target: { value } }) => setSearchText(value)}
      />
    </>
  )
}
