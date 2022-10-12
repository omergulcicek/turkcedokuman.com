import Link from "next/link"
import Brand from "./Brand"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="flex">
            <div>
              <Brand />

              <p>
                <Link href="https://omergulcicek.com/">
                  <a target="_blank" rel="noopener noreferrer">
                    Ömer Gülçiçek
                  </a>
                </Link>
                , {new Date().getFullYear()}
              </p>
              <p>MIT lisansı ile lisanslanmıştır.</p>
            </div>

            <div>
              <strong>Diğer Projeler</strong>

              <ul>
                <li>
                  <Link href="https://turkuazcss.com/">
                    <a target="_blank" rel="noopener noreferrer">
                      Turkuaz
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
