import React from "react";
import Styled from "@emotion/styled";
import {primary as ColorPrimary} from '../data/color';


export const Button = Styled.button`
    border: none;
    color: #fff;
    padding: 0.7rem 1.5rem;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    font-family: "Fira Code", "Roboto", Arial;
    border-radius: 3px;
    ${props => (props.rounded && `
        padding: 0.6rem 2.5rem;
        border-radius: 20px;
  `)}
`


export const ButtonPrimary = Styled(Button)`
    background-color: ${ColorPrimary};
`