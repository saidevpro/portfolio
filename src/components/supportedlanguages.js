import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

const SupportedLanguages = ({ size, className }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { regex: "/\\\\w+.lang/" } }) {
          edges {
            node {
              name,
              childImageSharp {
                fluid(quality: 100) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul
        className={className}
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        {data.allFile.edges.map(({ node }, key) => (
          <li
            key={key}
            css={css`
              padding: 0 0.5rem;
            `}
          >
            <img
              src={node.childImageSharp.fluid.src}
              alt={node.name.substring(0, node.name.indexOf('.'))}
              width={size}
            />
          </li>
        ))}
      </ul>
    )}
  />
)

SupportedLanguages.defaultProps = {
  size: 35,
}

SupportedLanguages.propTypes = {
  size: PropTypes.number,
}

export default SupportedLanguages
