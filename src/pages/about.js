import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Container from "../components/container"
import Space from "../components/space"
import Column from "../components/column";
import Row from "../components/row";
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

const Text = ({ children, ...props }) => (
  <SecondaryText
    {...props}
    size={1.2}
    lineHeight={1.5}
    css={css`
      /* text-align: justify; */
    `}
  >
    {children}
  </SecondaryText>
)

export default () => (
  <Layout>
    <SEO title="A Propos" />
    <Space size={5} />
    <Container
      xl={5}
      md={8}
      lg={6}
      css={css`
        justify-content: center;
      `}
    >
      <section
        css={css`
          text-align: center;
        `}
      >
        <div>
          <Avatar size={8} src={Logo} alt="profil image" />
          <PrimaryText size={2} as="h6" >
            Sow Mamadou Saidou
          </PrimaryText>
          <SecondaryText size={1.2} lineHeight={1.5} align="center" css={css`
            color: #000000;
            font-weight: 700;
          `}>
            Développeur web
          </SecondaryText>
          <PrimaryText as="strong" size={1.3} css={css`
            background-image: url('/color-palette.jpg');
            background-size: contain;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
          `}>UI/UX Designer</PrimaryText>
        </div>
      </section>
      <section
        css={css`
          margin-top: 2.5em;`}
      >
        <Text css={css`line-height: 1.7;`} size={1.3} align="center">
          Je me nomme <PrimaryText as="b">Sow Mamadou Saidou</PrimaryText> et je
          suis freelance en développement web et UI designer.
          J'aide les gens à développer et/ou accroitre leurs visibilités
          en ligne en mettant en place des applications simples,
          compréhensibles, rapides et ergonomiques.
          Si vous avez un projet, vous pouvez me{" "}
          <PrimaryText as="a" href="/contact">
            contacter
          </PrimaryText>
          .
        </Text>
      </section>
      <Space size={3}/>
      <section css={css`
        width: 100%;
        text-align: left;
        margin-top: 25px;
      `}>
        <PrimaryText as="h2" size={1.2} align="center">TECHNOLOGIES</PrimaryText>
      </section>
      <section>
        <Space size={2} />
        <Skills size={40}/>
      </section>
      <Space size={3} />
    </Container>
  </Layout>
)
