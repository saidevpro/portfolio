import React from "react"
import { css } from "@emotion/core"

const style = css`
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
`

const Footer = () => (
  <footer css={style}>© {new Date().getFullYear()}, Built with</footer>
)

export default Footer
