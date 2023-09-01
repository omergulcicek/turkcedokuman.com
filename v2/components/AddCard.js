import Link from "next/link"
import { getLogoSvg } from "@/utils/getLogo"

export default function AddCard() {
  return (
    <>
      <article className="m-[10px] h-40 w-80 select-none p-[1px] rounded-lg border border-dashed">
        <div className="bg-gradient-to-t hover:bg-white relative flex h-full flex-col justify-between p-4 transition">
          <Link
            href="https://github.com/omergulcicek/turkcedokuman.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between gap-8 h-full"
          >
            <header className="align-center flex flex-wrap justify-between">
              <div>
                <h2 className="text-base font-medium text-neutral-600">
                  Yeni Doküman Ekle
                </h2>
              </div>
              <figure className="h-auto w-auto rounded-md bg-white border border-dashed text-green-400">
                {getLogoSvg("add-card")}
              </figure>
            </header>

            <footer className="text-xs text-neutral-500">
              Doküman eklemek için GitHub yönelgelerini takip edebilirsin.
              Detaylar için tıkla.
            </footer>
          </Link>
        </div>
      </article>
    </>
  )
}
