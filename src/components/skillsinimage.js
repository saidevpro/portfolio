import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import {PrimaryText} from "../components/text"
import {SecondaryText} from "../components/text"
import Row from './row';
import Column from './column';

const SupportedLanguages = ({ size, className }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { regex: "/\\\\w+.skill/" } }) {
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
      <Row
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
        `}
      >
        {data.allFile.edges.map(({ node }, key) => (
          <Column
            flex={4}
            sm={3}
            lg={2}
            key={key}
            css={css`
              padding: 1rem;
              text-align: center;
            `}
          >
            <img
              src={node.childImageSharp.fluid.src}
              alt={node.name.substring(0, node.name.indexOf('.'))}
              height={size}
              css={css`max-width: 100%;`}
            />
            <SecondaryText size={0.9} css={css`text-transform: capitalize;`}>{node.name.substring(0, node.name.indexOf('.'))}</SecondaryText>
          </Column>
        ))}
      </Row>
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
