import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FiSun, FiMoon } from "react-icons/fi"

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
          <FiSun color={"var(--background)"} />
        ) : (
          <FiMoon color={"var(--color)"} />
        )}
      </figure>
    </>
  )
}

export default DarkTheme
