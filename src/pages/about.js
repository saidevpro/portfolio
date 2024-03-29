import React from "react"
import { css } from "@emotion/core"
import Container from "../components/container"
import Space from "../components/space"
import Column from "../components/column";
import Row from "../components/row";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"
import Logo from "../images/profil-picture.jpg";
import Text from "../components/text"
import {PrimaryText} from "../components/text"
import {SecondaryText} from "../components/text"
import { Link } from "gatsby"
import Skills from "../components/skillsinimage"

const Title = ({ children }) => (
  <PrimaryText as="h6" size={1.3} lineHeight={1.8}>
    {children}
  </PrimaryText>
)

export default () => (
  <Layout>
    <SEO title="A Propos" />
    <Space size={7} />
    <Container
      xl={5}
      md={8}
      lg={6}
      css={css`
        justify-content: center;
      `}
    >
      <section>
        <Row>
          <Column flex="12">
            <Row>
              <Column flex="12" sm="3" css={css`text-align: center;`}>
                <Avatar css={css`width: 100%; max-width: 200px; `} src={Logo} alt="profil image" />
              </Column>
              <Column flex="12" sm="9" css={css`margin-top: 20px;`}>
                <PrimaryText size={2} as="h5" align="center" smAlign="left" css={css`
                  margin: 0;
                  text-transform: uppercase;
                `} >
                  Sow Mamadou Saidou
                </PrimaryText>
                <SecondaryText size={1.2} lineHeight={1.5} align="center" smAlign="left" as="p" css={css`margin: 0;`}>
                  Développeur web
                </SecondaryText>
                <Text as="p" align="center" smAlign="left" size={1.3} css={css`margin: 0;`}>
                  <PrimaryText as="strong" css={css`
                  background-image: url('/color-palette.jpg');
                  background-size: contain;
                  background-clip: text;
                  -webkit-background-clip: text;
                  color: transparent;
                `}>UI/UX Designer</PrimaryText>
                </Text>
              </Column>
            </Row>
            <Space size={1}/>
            <Text size={1.3} lineHeight={1.5} align="left">
              Je me nomme <PrimaryText as="b">Sow Mamadou Saidou</PrimaryText> et je
              suis freelance en développement web et UI designer.
              J'aide les gens à développer et/ou accroitre leurs visibilités
              en ligne en mettant en place des applications simples,
              compréhensibles, rapides et ergonomiques.
              Si vous avez un projet, vous pouvez me{" "}
              <Link to="/contact" css={css`text-decoration: none;`}>
                <PrimaryText as="span" href="/contact">
                  contacter
                </PrimaryText>
              </Link>
            </Text>
          </Column>
        </Row>
      </section>
      <section>
        <Space size={1.5}/>
        <PrimaryText as="h2" size={1.2} align="left">Technologies</PrimaryText>
        <Space size={2} />
        <Skills size={40}/>
      </section>
      <Space size={3} />
    </Container>
  </Layout>
)
