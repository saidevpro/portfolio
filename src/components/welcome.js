import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import PrimaryText from "./primarytext"
import SecondaryText from "./secondarytext"

const BreakRow = styled.div`
  max-width: 100px;
  height: 5px;
  background-color: #704c9c;
  margin-top: 1.4rem;
`

export default () => (
  <section
    css={css`
      text-align: center;
    `}
  >
    <PrimaryText
      as="h3"
      size={2.4}
      css={css`
        margin-bottom: 25px;
      `}
    >
      Welcome to my portfolio
    </PrimaryText>
    <SecondaryText
      lineHeight={1.2}
      size={1.3}
      css={css`
        max-width: 380px;
      `}
    >
      I'm Sow Mamadou Saïdou freelance in web and mobile development and ui
      design from Morocco
    </SecondaryText>
    {/* <BreakRow /> */}
  </section>
)
