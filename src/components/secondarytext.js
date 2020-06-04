import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const SecondaryText = styled.p`
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
  color: #5a5a5a;
`

SecondaryText.defaultProps = {
  lineHeight: 1,
}

SecondaryText.propTypes = {
  size: PropTypes.number,
  lineHeight: PropTypes.number,
  align: PropTypes.string,
}

export default SecondaryText
