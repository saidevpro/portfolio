import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import {keyframes} from "@emotion/core"
import LogoImage from "./logo"

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5%;
  padding-right: 5%;
  background-color: rgba(255, 255, 255, 1);
  z-index: 800;
  ${props => (props.useBoxShadow && `
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  `)}
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  @media (max-width: 576px) {
    & {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      box-shadow: 0 0 2px rgba(0,0,0,0.5);
      background-color: #ffffff;
    }
  }
`

const NavList = styled.ul`
  display: flex;
  @media (max-width: 576px) {
    & {
      width: 100%;
    }
  }
`

const navItemBorderAnimation = keyframes`
  0% {
    width: 0;
  }100% {
    width: 100%;
  }
`

const NavItem = styled.li`
  display: flex;
  @media (max-width: 576px) {
    & {
      flex: 0 0 33.33%;
    }
  }
  a {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 1.5rem;
    text-decoration: none;
    font-size: 0.95rem;
    color: #919191;
    font-weight: 700;
    @media (max-width: 576px) {
      width: 100%;
      padding-top: 1rem;
      padding-bottom: 1rem;
      text-align: center;
    }
    &.active{
      color: #704c9c;
      &::after{
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 3px solid;
        border-radius: 5px;
        animation-timing-function: cubic-bezier(.87,-.41,.19,1.44);
        animation: ${navItemBorderAnimation} 0.5s ;
        @media (max-width: 576px) {
          bottom: initial;
          top: 0;
          border-top: 3px solid;
          border-bottom: none;
        }
      }
    }
    &:hover {
      color: #704c9c;
    }
  }
`

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      useBoxShadow: false
    }
    this.headerRef = React.createRef();
  }
  render () {
    const {menuItems} = this.props;
    const {useBoxShadow} = this.state;
  
    return (
      <HeaderWrapper ref={this.headerRef} useBoxShadow={useBoxShadow}>
        <LogoWrapper>
          <Link to="/">
            <LogoImage />
          </Link>
        </LogoWrapper>
        <Nav>
        <NavList>
          {Object.keys(menuItems).map(title => (
            <NavItem key={title}>
              <Link to={menuItems[title]} activeClassName="active">
                {title}
              </Link>
            </NavItem>
          ))}
        </NavList>
      </Nav>
      </HeaderWrapper>
    )
  }
}


Header.propTypes = {
  menuItems: PropTypes.object,
}

Header.defaultProps = {
  menuItems: {},
}

export default Header
