import { getLogoSvg } from "../utils/getLogo"

export default function AddCard() {
  return (
    <>
      <article className="bg-white flex flex-col items-center justify-center gap-2 border border-dashed rounded-md p-4 transition-transform cursor-pointer hover:scale-105">
        {getLogoSvg("add-card")}

        <strong className="flex text-neutral-700 text-base">
          Yeni Doküman Ekle
        </strong>

        <p className="text-neutral-400 text-center text-sm">
          Doküman eklemek için GitHub yönelgelerini takip edebilirsin. Detaylar
          için tıkla.
        </p>
      </article>
    </>
  )
}
