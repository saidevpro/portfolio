import React from "react";
import Styled from "@emotion/styled";

export const Button = Styled.button`
    border: none;
    background-color: #704c9c;
    color: #fff;
    padding: 0.7rem 1.5rem;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    font-family: "Fira Code", "Roboto", Arial;
    border-radius: 3px;
`


export const ButtonRadius = Styled(Button)`
    padding: 0.6rem 2.5rem;
    border-radius: 20px;
`