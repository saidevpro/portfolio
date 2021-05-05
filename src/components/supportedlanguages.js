import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import {keyframes} from "@emotion/core"

const animateListItem = keyframes`
  0% {
    /* height: 0; */
    transfrom: scale(0); 
  }
  70% {
    /* height: auto;  */
    transfrom: scale(1.4); 
  }
  100% {
    transfrom: scale(1); 
  }
`

const Li = styled.li`
  padding: 0 0.5rem;
  animation: ${animateListItem} 4s forwards;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

const SupportedLanguages = ({ size }) => (
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
      <Ul>
        {data.allFile.edges.map(({ node }, key) => (
          <Li key={key} >
            <img
              src={node.childImageSharp.fluid.src}
              alt={node.name.substring(0, node.name.indexOf('.'))}
              height={size}
            />
          </Li>
        ))}
      </Ul>
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
