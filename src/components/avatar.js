import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import {primary as ColorPrimary} from '../data/color'; 

const Width = 30; 
const Avatar = styled.img`
  width: ${props => props.size * Width}px;
  box-shadow: 10px 10px 0 ${ColorPrimary};
  &::after  {  
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${ColorPrimary};
  }
`

Avatar.defaultProps = {
  size: 1,
}

Avatar.propTypes = {
  size: PropTypes.number,
}

export default Avatar
