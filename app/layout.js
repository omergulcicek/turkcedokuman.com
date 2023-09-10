import { Providers } from "./providers"

import "./globals.css"

export const metadata = {
  title: "Türkçe Doküman",
  description: "Yazılım alanında sıfırdan eğitim veren Türkçe dokümanlar",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
