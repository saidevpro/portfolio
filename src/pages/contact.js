import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import PrimaryText from "../components/primarytext"
import SecondaryText from "../components/secondarytext"
import Space from "../components/space"

export default () => (
  <Layout>
    <SEO title="contact" />
    <Space size={5} />
    <Container xl={7} lg={8}>
      <section>
        <SecondaryText size={1.7}>Contact</SecondaryText>
        <PrimaryText size={2.2} lineHeight={1.2} as="h3">
          {/* If you've got a project in mind, why not get in touch. Let's work
          together. &#9787; */}
          Si vous avez un projet, ça sera un plaisir de travailler avec vous.
        </PrimaryText>
        <Space size={1} />
        <SecondaryText size={1.3}>
          {/* You can contact me on: <br /> */}
          Vous pouvez me contacter par:
        </SecondaryText>
        <PrimaryText
          size={1.1}
          lineHeight={1.5}
          css={css`
            margin-top: 15px;
            font-weight: 600;
          `}
        >
          Téléphone: +212 681 282 882 <br />
          Em&#64;il: saidev@gmail.com <br />
        </PrimaryText>
      </section>
    </Container>
  </Layout>
)
