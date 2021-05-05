/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"; 
import { StaticQuery, graphql } from "gatsby";
import { withPrefix } from "gatsby";

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <script src={withPrefix('js/anime.min.js')} type="text/javascript" />
        </Helmet>
        <Header
          menuItems={{
            "accueil": "/",
            'a propos': "/about/",
            "contact": "/contact/",
            // "Plan de Travail": "/workplan",
          }}
        />
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
