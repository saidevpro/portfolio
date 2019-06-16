import React from "react"
import PropTypes from "prop-types"

const Space = ({ size }) => <br style={{ lineHeight: `${size}rem` }} />

Space.defaultProps = {
  size: 1,
}

Space.propTypes = {
  size: PropTypes.number,
}

export default Space
