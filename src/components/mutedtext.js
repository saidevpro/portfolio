import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import {muted as ColorMuted} from '../data/color'; 

const MutedText = styled.p`
  font-size: ${props => (props.size ? props.size + "rem" : "inherit")};
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
  color: ${ColorMuted};
`

MutedText.defaultProps = {
  lineHeight: 1,
}

MutedText.propTypes = {
  size: PropTypes.number,
  lineHeight: PropTypes.number,
  align: PropTypes.string
}

export default MutedText
