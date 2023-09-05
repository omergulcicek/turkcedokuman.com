import "./globals.css"

export const metadata = {
  title: "Türkçe Doküman",
  description: "Yazılım alanında sıfırdan eğitim veren Türkçe dokümanlar",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  )
}
