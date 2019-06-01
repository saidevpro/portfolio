import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const PrimaryText = styled.p`
  font-size: ${props => (props.size ? props.size + "rem" : "inherit")};
  line-height: ${props => props.lineHeight};
  color: #0e5398;
`

PrimaryText.defaultProps = {
  lineHeight: 1,
}

PrimaryText.propTypes = {
  size: PropTypes.number,
  lineHeight: PropTypes.number,
}

export default PrimaryText
