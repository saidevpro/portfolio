import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Width = 30

const Avatar = styled.img`
  width: ${props => props.size * Width}px;
  /* border-radius: 50%; */
  border: 1px solid #e0e0e0;
`

Avatar.defaultProps = {
  size: 1,
}

Avatar.propTypes = {
  size: PropTypes.number,
}

export default Avatar
