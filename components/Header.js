"use client"

import { FiExternalLink } from "react-icons/Fi"

import { Brand, DarkTheme } from "@/components"

export default function Header() {
  return (
    <>
      <header className="border-b dark:border-b-neutral-800 bg-white dark:bg-neutral-900 p-6 select-none">
        <div className="container flex items-center justify-between flex-col md:flex-row gap-5 m-auto">
          <div className="flex items-center gap-3">
            <Brand />
            <DarkTheme />
          </div>

          <div>
            <a
              href="https://github.com/omergulcicek/turkcedokuman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 dark:text-blue-300 underline text-sm"
            >
              <span>Nasıl katkıda bulunabilirim?</span>

              <FiExternalLink />
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
