import React from "react"
import styled from "styled-components"
import turkcedokuman from "../turkcedokuman.json"

function App({document}) {
  let result = []
  const wordToSearch = document.toLocaleLowerCase("tr-TR")

  let list = turkcedokuman.filter(e => 
    e.ad.toLocaleLowerCase("tr-TR").indexOf(wordToSearch) > -1
    || e.aciklama.toLocaleLowerCase("tr-TR").indexOf(wordToSearch) > -1
    || e.yazar.toLocaleLowerCase("tr-TR").indexOf(wordToSearch) > -1
    || e.etiket.toLocaleLowerCase("tr-TR").indexOf(wordToSearch) > -1
  )
  
  list.map(({ad, aciklama, link, logo, yazar}, i) => 
  result.push(
    <div className="col-12 col-md-6 col-xl-4" key={i}>
      <Card>
        <header>
          <img src={require(`../img/${logo}.png`)} alt="Logo" height="80" />
          
          <div>
            <h2>{ad}</h2>
            <p>{aciklama}</p>
          </div>
        </header>

        <footer>
          <div>
            {yazar}
          </div>

          <div>
            <a href={link}>
              <svg aria-hidden="true"role="img"  viewBox="0 0 512 512"><path fill="currentColor" d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path></svg>

              <span>GitHub'ta İncele</span>
            </a>
          </div>
        </footer>
      </Card>
    </div>
    )
  )

  return result;
}

export default App

const Card = styled.article`
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
  min-height: 224px;
  overflow: hidden;

  header {
    align-items: center;
    display: flex;
    padding: 24px;
    position: relative;

    img {
      opacity: 0.3;
      position: absolute;
      top: 50%;
      right: 0;
      transform: rotate(15deg);
      user-select: none;
      pointer-events: none;filter: drop-shadow(5px 5px 1px rgba(0,0,0,.25));
    }

    h2 {
      font-size: 18px;
    }
  
    p {
      color: var(--c-grey-dark);
      font-size: 16px;
    }
  }

  footer {
    background-color: var(--c-grey);
    border-radius: 0 0 8px 8px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    font-size: 15px;
    justify-content: space-between;
    padding: 12px 24px;
    z-index: 1;

    div {
      width: 50%;

      &:first-of-type {
        overflow: hidden;
        padding-right: 8px;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:last-of-type {
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        padding-left: 8px;
        text-align: right;
      }

      a {
        color: var(--c-red);
        white-space: nowrap;

        svg {
          color: inherit;
          height: 15px;
          margin-right: 8px;
        }
      }
    }
  }
`;