import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Welcome from "../components/welcome"
import Container from "../components/container"
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
      <SEO title="Home" />
      <Container
        xl={4}
        lg={5}
        md={8}
        css={css`
          height: 100%;
          justify-content: center;
          align-items: center;
        `}
      >
        <section
          css={css`
            margin-top: 10vh;
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
            Je m'appelle Sow Mamadou Saidou, freelance en développement web et
            mobile et <PrimaryText as="span">UI designer</PrimaryText> depuis le
            Maroc.
          </SecondaryText>
          <Space size={2} />
          <SupportedLanguages
            size={45}
            css={css`
              justify-content: center;
            `}
          />
          {/* <FloattingActionButton href="/workplan">
            Méthode de travail &rarr;
          </FloattingActionButton> */}
        </section>
      </Container>
    </Layout>
  )
}

export default IndexPage
