import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"

import SecondaryText from "./secondarytext"

const Quote = ({ content, author }) => (
  <blockquote
    css={css`
      display: block;
      margin: 0;
      padding: 2rem 2.5rem;
    `}
  >
    <SecondaryText as="p" size={1.13}>
      “ {content} ”
    </SecondaryText>
    <p
      css={css`
        margin-top: 15px;
        font-size: 0.9rem;
        color: #704c9c;
        font-weight: 600;
        font-style: normal;
      `}
    >
      {author}
    </p>
  </blockquote>
)

Quote.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}

export default Quote
