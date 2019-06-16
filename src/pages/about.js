import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Container from "../components/container"
import Space from "../components/space"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"
import Logo from "../images/gatsby-astronaut.png"
import PrimaryText from "../components/primarytext"
import SecondaryText from "../components/secondarytext"
import SupportedLanguages from "../components/supportedlanguages"
import TrainingPlateforms from "../components/trainingplateform"
import Skills from "../components/skillsinimage"
import ImagesWrapper from "../components/imageswrapper"

const Title = ({ children }) => (
  <PrimaryText as="h6" size={1.3} lineHeight={1.8}>
    {children}
  </PrimaryText>
)

const Text = ({ children }) => (
  <SecondaryText
    size={1.2}
    lineHeight={1.5}
    css={css`
      text-align: justify;
    `}
  >
    {children}
  </SecondaryText>
)

export default () => (
  <Layout>
    <SEO title="About me" />
    <Space size={5} />
    <Container
      xl={6}
      lg={8}
      md={9}
      css={css`
        justify-content: center;
      `}
    >
      <section
        css={css`
          padding: 0 2em;
          text-align: center;
        `}
      >
        <div>
          <Avatar size={4.5} src={Logo} alt="profil image" />
          <PrimaryText size={1.2} as="h6">
            Sow Mamadou Saïdou
          </PrimaryText>
          <SecondaryText size={1.2} lineHeight={1.3}>
            Développeur web et mobile
            <br />
            <PrimaryText as="span">UI Designer</PrimaryText>
          </SecondaryText>
        </div>
      </section>
      <section
        css={css`
          margin-top: 2.5em;
        `}
      >
        <Text>
          Je me nomme <PrimaryText as="b">Sow Mamadou Saidou</PrimaryText> et je
          suis freelance en développement mobile et web et UI designer.
          <br /> J'aide les gens à développer et/ou accroitre leurs visibilités
          en ligne en mettant en place des applications simples,
          compréhensibles, rapides et ergonomiques.
          <br />
          Si vous avez un projet, vous pouvez me{" "}
          <PrimaryText as="a" href="/contact">
            contacter
          </PrimaryText>
          .
        </Text>
      </section>
      <section>
        <Space size={2} />
        <Skills
          size={50}
          css={css`
            justify-content: center;
            & > * {
              padding: 1em 1.5em !important;
            }
          `}
        />
      </section>
      <Space size={3} />
    </Container>
  </Layout>
)
