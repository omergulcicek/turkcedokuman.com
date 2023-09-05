"use client"

import { FiExternalLink } from "react-icons/Fi"

import { Brand } from "@/components"

export default function Header() {
  return (
    <>
      <header className="border-b bg-white p-6">
        <div className="container flex items-center justify-between m-auto">
          <div className="flex gap-3">
            <Brand />
            <button>+</button>
          </div>

          <div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-500 underline text-sm"
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
