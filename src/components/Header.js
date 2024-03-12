import React from 'react'

const Header = () => {
  return (
    <header>
      <div className="header">
        <a
          href="https://t.me/kirill_afanasyev97"
          className="header__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/icons8-телеграмма-app-48.png"
            alt="telegram"
            className="header__img"
          />
        </a>
        <a
          href="https://github.com/kafanasyev97"
          className="header__link"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/icons8-github.svg"
            alt="GitHub"
            className="header__img"
          />
        </a>
      </div>
    </header>
  )
}

export default Header
