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
    <Container xl={8} lg={10}>
      <section>
        <SecondaryText size={1.7}>Contact</SecondaryText>
        <PrimaryText size={2.5} lineHeight={1.2} as="h3">
          If you've got a project in mind, why not get in touch. Let's work
          together. &#9787;
        </PrimaryText>
        <Space size={2.5} />
        <SecondaryText size={1.3}>
          You can contact me on: <br />
        </SecondaryText>
        <PrimaryText
          size={1.1}
          lineHeight={1.4}
          css={css`
            margin: 8px 0;
            font-weight: 600;
          `}
        >
          Phone: +212 681 282 882 <br />
          Em&#64;il: saidev@gmail.com <br />
        </PrimaryText>
      </section>
    </Container>
  </Layout>
)
