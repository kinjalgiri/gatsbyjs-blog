import React from "react"
import PropTypes from "prop-types"

import { siteMetadata } from "./../../gatsby-config"
import Nav from "./nav"
import Seo from "./seo"

const Layout = ({ children }) => {
  return (
    <>
      <Seo title={ siteMetadata.title } />
      <Nav />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
