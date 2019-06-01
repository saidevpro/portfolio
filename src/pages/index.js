import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Welcome from "../components/welcome"
import Container from "../components/container"
import SEO from "../components/seo"
import SupportedLanguages from "../components/supportedlanguages"

const FloattingActionButton = styled.a`
  position: fixed;
  bottom: 3.5rem;
  left: 50%;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #0e5398;
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
        <div style={{ marginTop: "10vh" }}>
          <Welcome />
          <section
            css={css`
              margin-top: 35px;
              display: flex;
              justify-content: center;
            `}
          >
            <SupportedLanguages
              size={45}
              css={css`
                justify-content: center;
              `}
            />
          </section>
          <FloattingActionButton href="/working">
            Work methods ? &rarr;
          </FloattingActionButton>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
