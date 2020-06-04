import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Welcome from "../components/welcome"
import Container from "../components/container"
import Row from "../components/row";
import SEO from "../components/seo"
import SupportedLanguages from "../components/supportedlanguages"
import Space from "../components/space"
import PrimaryText from "../components/primarytext"
import SecondaryText from "../components/secondarytext"

const FloattingActionButton = styled.a`
  position: fixed;
  bottom: 3.5rem;
  left: 50%;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #704c9c;
  color: #ffffff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  transform: translateX(-50%);
  transition: all 0.3s;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
    <SEO title="Acceuil" />
    <Container>
      <Space size={3} />
      <section
        css={css`
          margin-top: 10vh;
          text-align: center;
        `}
      >
        <PrimaryText
          as="h3"
          size={2.7}
          css={css`
            margin-bottom: 25px;
            font-weight: 700;
          `}
        >
          Bienvenu sur mon portfolio
        </PrimaryText>
        <SecondaryText
          lineHeight={1.6}
          size={1.3}
          css={css`
            max-width: 440px;
            margin: 1rem auto;
          `}
        >
          Je m'appelle Sow Mamadou Saidou, freelance en&nbsp;
           <PrimaryText as ="strong" css={css`
            color:#000000;
            font-weight: bolder;
            `}>Développement web </PrimaryText> et&nbsp;
          <PrimaryText as="span" css={css`
            background-image: url('/color-palette.jpg');
            background-size: contain;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            font-weight: bolder;
            font-size: 1.5rem;
            `}>UI/UX Designer</PrimaryText> depuis le
          Maroc.
        </SecondaryText>
        <Space size={2} />
        <SupportedLanguages
          size={50}
          css={css`
            justify-content: center;
          `}
        />
      </section>
    </Container>
  </Layout>
  )
}

export default IndexPage
