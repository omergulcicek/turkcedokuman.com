import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

import MoonSvg from "./../public/moon.svg"
import SunSvg from "./../public/sun.svg"

const DarkTheme = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <>
      <figure
        className="cursor-pointer p-2"
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
      >
        {theme === "dark" ? (
          <img
            src={SunSvg.src}
            alt="Açık Tema"
            height={SunSvg.height}
            width={SunSvg.width}
          />
        ) : (
          <img
            src={MoonSvg.src}
            alt="Koyu Tema"
            height={MoonSvg.height}
            width={MoonSvg.width}
          />
        )}
      </figure>
    </>
  )
}

export default DarkTheme
