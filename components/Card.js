import Link from "next/link"
import Tilt from "react-parallax-tilt"
import classNames from "classnames"

import { MainContext, useContext } from "./context"

import { getLogoSvg } from "../utils/getLogo"

export default function Card({
  data: { title, desc, logo, author, url },
  isAddCard,
}) {
  const { searchText } = useContext(MainContext)

  if (isAddCard && searchText !== "") return false

  return (
    <>
      <Tilt tiltEnable={!isAddCard}>
        <article
          className={classNames(
            "m-[10px] h-40 w-80 select-none p-[1px] border rounded-lg overflow-hidden",
            { "border-dashed": isAddCard }
          )}
        >
          <div className="bg-gradient-to-t bg-white relative flex h-full flex-col justify-between p-4 transition">
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between gap-8 h-full"
            >
              <header className="align-center flex flex-wrap justify-between">
                <div>
                  <h2 className="text-base font-medium text-neutral-600">
                    {title}
                  </h2>
                  <h3 className="text-xs text-neutral-500">{author}</h3>
                </div>
                <figure
                  className={classNames(
                    "h-auto w-auto rounded-md bg-white border p-1 text-[10px] text-neutral-400",
                    { "border-dashed": isAddCard }
                  )}
                >
                  {getLogoSvg(logo)}
                </figure>
              </header>

              <footer className="text-xs text-neutral-500">{desc}</footer>
            </Link>
          </div>
        </article>
      </Tilt>
    </>
  )
}
