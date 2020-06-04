import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Width = 30

const Avatar = styled.img`
  width: ${props => props.size * Width}px;
`

Avatar.defaultProps = {
  size: 1,
}

Avatar.propTypes = {
  size: PropTypes.number,
}

export default Avatar
