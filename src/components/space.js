import React from "react"
import PropTypes from "prop-types"

const Space = ({ size }) => <div style={{ marginTop: `${size}rem` }} />

Space.defaultProps = {
  size: 1,
}

Space.propTypes = {
  size: PropTypes.number,
}

export default Space
