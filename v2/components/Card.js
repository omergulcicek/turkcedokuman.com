import Link from "next/link"
import { getLogoSvg } from "../utils/getLogo"

export default function Card({ title, desc, logo, author, avatar, url }) {
  return (
    <>
      <article className="bg-white border rounded-md p-4 transition-transform cursor-pointer hover:scale-105">
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col justify-between gap-8 h-full"
        >
          <div className="flex flex-col items-center gap-3">
            {getLogoSvg(logo)}

            <strong className="text-base">{title}</strong>

            <p className="text-neutral-400 text-sm">{desc}</p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <figure className="flex bg-gray-200 h-8 w-8 rounded-full overflow-hidden">
              {avatar && (
                <img
                  src={`${avatar}?v=${new Date().getDay()}`}
                  alt={title}
                  height={32}
                  width={32}
                />
              )}
            </figure>

            <span className="text-sm">{author}</span>
          </div>
        </Link>
      </article>
    </>
  )
}
