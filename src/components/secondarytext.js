import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const SecondaryText = styled.p`
  font-size: ${props => (props.size ? props.size + "rem" : "inherit")};
  line-height: ${props => props.lineHeight};
  color: #5a5a5a;
`

SecondaryText.defaultProps = {
  lineHeight: 1,
}

SecondaryText.propTypes = {
  size: PropTypes.number,
  lineHeight: PropTypes.number,
}

export default SecondaryText
