import React from 'react'
import { Nav, NavHeader, NavCenter, NavRight, NavLeft, Title } from './styled.js'
import SearchBar from './SearchBar'

function Header () {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <Title>TMDb Movie Search</Title>
        </NavLeft>
        <NavCenter />
        <NavRight />
      </NavHeader>
    </Nav>
  )
}

export default Header
