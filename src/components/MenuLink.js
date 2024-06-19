import React from 'react'
import { Link } from 'react-router-dom'

const MenuLink = ({ url, children }) => {
  return (
    <Link className="header__nav-link" to={url}>
      {children}
    </Link>
  )
}

export default MenuLink
