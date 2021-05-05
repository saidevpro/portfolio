import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import {primary as ColorPrimary} from '../data/color'; 
import {secondary as ColorSecondary} from '../data/color'; 


const Text = styled.p`
  font-size: ${props => (props.size ? props.size + "rem" : "inherit")};
  color: #333333;
  ${({ lineHeight }) =>
  lineHeight &&
  `
  line-height: ${lineHeight}
  ;`}
  ${({ align }) =>
  align &&
  `
  text-align: ${align}
  ;`}
   ${({ smAlign }) =>
    smAlign &&
    `
    @media (min-width: 576px) {
        text-align: ${smAlign};
    }
  `}
  ${({ mdAlign }) =>
    mdAlign &&
    `
      @media (min-width: 768px) {
        text-align: ${mdAlign};
      }
  `}
  ${({ lgAlign }) =>
    lgAlign &&
    `
      @media (min-width: 992px) {
        text-align: ${lgAlign};
      }
  `}
  ${({ xlAlign }) =>
    xlAlign &&
    `
      @media (min-width: 1200px) {
        text-align: ${xlAlign};
      }
  `}
`

export const PrimaryText = styled(Text)`
  color: ${ColorPrimary};
`

export const SecondaryText = styled(Text)`
  color: ${ColorSecondary};
`

Text.defaultProps = {
  lineHeight: 1,
}

Text.propTypes = {
  size: PropTypes.number,
  lineHeight: PropTypes.number,
  align: PropTypes.string
}

export default Text
