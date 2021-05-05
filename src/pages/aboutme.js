import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Container from "../components/container"
import Space from "../components/space"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"
import Logo from "../images/gatsby-astronaut.png"
import {PrimaryText} from "../components/text"
import {SecondaryText} from "../components/text"
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
      color: #2f2e2e;
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
      xl={7}
      lg={8}
      md={9}
      css={css`
        /* justify-content: center; */
      `}
    >
      <section
        css={css`
          width: 100%;
          display: flex;
          justify-content: center;
          text-align: center;
        `}
      >
        <div>
          <Avatar size={5} src={Logo} alt="profil image" />
          <PrimaryText size={2} as="h6">
            Sow Mamadou Saïdou
          </PrimaryText>
          <SecondaryText size={1.4} lineHeight={1.3}>
            Freelance Web and mobile development
            <br />
            <PrimaryText size={1.4} as="span">
              UI Designer
            </PrimaryText>
          </SecondaryText>
        </div>
      </section>
      <section style={{ marginTop: "40px" }}>
        <Title>&#8627;&nbsp;Description</Title>
        <Text>
          Alors comme vous l'avez certainement vu, je me nomme{" "}
          <PrimaryText as="b">Sow Mamadou Saidou</PrimaryText> et je suis{" "}
          <PrimaryText as="span">
            étudiant et freelance en developpement mobile et web et UI designer
          </PrimaryText>{" "}
          (comme le disent les anglo-saxons). Je vis à Casablanca au Maroc.
          <br /> J'aide les gens à mettre en place des applications
          ergonomiques, simples et comprehensibles pour rendre leur usage plus
          facile. D'ailleurs j'espère que c'est le cas pour ce site.
        </Text>
      </section>
      <section style={{ marginTop: "25px" }}>
        <Title>&#8627;&nbsp;Formation</Title>
        <Text>
          Ohh la formation. La formation des developpeur/codeur est , de nos
          jours, principalement assuré par{" "}
          <PrimaryText as="span">Google &#128076;</PrimaryText>. Je me suis
          formé et je continue à me former à travers des plateformes en ligne ou
          des MOOC.
          <br />
          Voici une liste des plateformes où je continue à me former
          régulièrement :
          <br />
          <br />
        </Text>
        <ImagesWrapper>
          <TrainingPlateforms
            size={60}
            css={css`
              justify-content: center;
            `}
          />
        </ImagesWrapper>
      </section>
      <section style={{ marginTop: "25px" }}>
        <Title>&#8627;&nbsp;Compétences</Title>
        <Text>
          Je travaille sur des projets{" "}
          <PrimaryText as="span">d'application web et aussi mobile</PrimaryText>
          . Mais je ne prétends pas connaître l'ensemble des technologies
          utilisées dans ces deux domaines car il en a beaucoup beaucoup (ohh ke
          oui). Donc je me contacte donc de vous lister ce dont je maîtrise et
          que j'utilise.
          <br />
          <br />
          Pour le developpement des applications web, je fais usage des
          technologies suivantes:{" "}
          <PrimaryText as="b">
            PHP et de ces frameworks (Laravel et Symfony), javascript, Nodejs,
            React, Vue et WordPress.
          </PrimaryText>
          <br />
          Pour le developpement des applications mobiles, j'utilise
          principalement le languages de programmation{" "}
          <PrimaryText as="b">Dart</PrimaryText> et le framework de
          développement mobile{" "}
          <PrimaryText as="b">Flutter de Google</PrimaryText>.
        </Text>
        <br />
        <br />
        <ImagesWrapper>
          <Skills
            size={60}
            css={css`
              justify-content: center;
              & > * {
                flex: 0 0 20%;
                padding: 0.5rem 0;
                text-align: center;
              }
            `}
          />
        </ImagesWrapper>
      </section>
      <Space size={5} />
    </Container>
  </Layout>
)
