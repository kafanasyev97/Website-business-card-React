import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import MenuLink from './MenuLink'

const Header = () => {
  const headerNav = useRef(null)
  const burgerMenuClick = (e) => {
    if (headerNav.current) {
      headerNav.current.classList.toggle('open')
      e.stopPropagation()
    }
  }
  document.addEventListener('click', (e) => {
    if (headerNav.current && headerNav.current.classList.contains('open')) {
      console.log(e)
      headerNav.current.classList.remove('open')
    }
  })

  return (
    <header className="header">
      <button onClick={burgerMenuClick} className="header__btn" type="button">
        <span className="header__btn-line"></span>
        <span className="header__btn-line"></span>
        <span className="header__btn-line"></span>
        <span className="header__btn-line"></span>
      </button>

      <div ref={headerNav} className="header__nav">
        <MenuLink url="/">Home</MenuLink>
        <div className="header__left-menu" />
        <Link className="header__nav-link" to="/about">
          About
        </Link>
        <div className="header__left-menu" />
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
