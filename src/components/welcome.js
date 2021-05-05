import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import {PrimaryText} from "../components/text"
import {SecondaryText} from "../components/text"

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
        margin-bottom: 45px;
      `}
    >
      {/* Welcome to my portfolio */}
      Bienvenu sur mon portfolio
    </PrimaryText>
    <SecondaryText
      lineHeight={1.25}
      size={1.3}
      css={css`
        max-width: 380px;
        margin: 1rem auto;
      `}
    >
      {/* I'm Sow Mamadou Saïdou freelance in web and mobile development and ui
      design from Morocco */}
      Je m'appelle Sow Mamadou Saidou, freelance en développement web et mobile
      et <PrimaryText as="span">UI designer</PrimaryText> depuis le Maroc.
    </SecondaryText>
    {/* <BreakRow /> */}
  </section>
)
