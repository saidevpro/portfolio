import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import LogoImage from "./logo"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 2.5rem;
  padding: 0 1rem;
  padding-right: 5%;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffff;
  z-index: 1000;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
`

const NavList = styled.ul`
  display: flex;
`

const NavItem = styled.li`
  display: flex;
  a {
    display: flex;
    align-items: center;
    padding: 0 0.7rem;
    text-decoration: none;
    font-size: 0.95rem;
    color: #919191;
    font-weight: 700;
    text-transform: uppercase;
    &:hover {
      color: #704c9c;
    }
  }
`
const activeLinkStyle = { color: "#704c9c" }

const Header = ({ menuItems }) => (
  <HeaderWrapper>
    <LogoWrapper>
      <Link to="/">
        <LogoImage />
      </Link>
    </LogoWrapper>
    <Nav>
      <NavList>
        {Object.keys(menuItems).map(title => (
          <NavItem key={title}>
            <Link to={menuItems[title]} activeStyle={activeLinkStyle}>
              {title}
            </Link>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  </HeaderWrapper>
)

Header.propTypes = {
  menuItem: PropTypes.object,
}

Header.defaultProps = {
  menuItem: {},
}

export default Header
