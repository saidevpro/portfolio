import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 576px) {
    width: ${props => (props.sm / 12) * 100}%;
  }
  @media (min-width: 768px) {
    width: ${props => (props.md / 12) * 100}%;
  }
  @media (min-width: 992px) {
    width: ${props => (props.lg / 12) * 100}%;
  }
  @media (min-width: 1200px) {
    width: ${props => (props.xl / 12) * 100}%;
  }
`

Container.defaultProps = {
  lg: 12,
  md: 12,
  xs: 12,
  xl: 12,
}

Container.propTypes = {
  lg: PropTypes.number,
  md: PropTypes.number,
  xs: PropTypes.number,
  xl: PropTypes.number,
}

Container.displayName = "Container"

export default Container
