"use client"

import { Brand } from "@/components"

export default function Header() {
  return (
    <>
      <header className="border-b bg-white p-6">
        <div className="container flex items-center justify-between m-auto">
          <Brand />
          <div className="flex gap-3">
            <a href="/" className="text-blue-400 underline">
              Nasıl katkıda bulunabilirim?
            </a>
            <span>GitHub</span>
          </div>
        </div>
      </header>
    </>
  )
}
