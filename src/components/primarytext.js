import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const PrimaryText = styled.p`
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
  color: #704c9c;
`

PrimaryText.defaultProps = {
  lineHeight: 1,
}

PrimaryText.propTypes = {
  size: PropTypes.number,
  lineHeight: PropTypes.number,
  align: PropTypes.string
}

export default PrimaryText
