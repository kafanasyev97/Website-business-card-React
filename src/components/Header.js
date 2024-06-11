import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <Link className="header__nav-link" to="/">
          Home
        </Link>
        <Link className="header__nav-link" to="/about">
          About
        </Link>
        <Link className="header__nav-link" to="/contacts">
          Contacts
        </Link>
      </div>
      <div className="header__socials">
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
