import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Welcome from "../components/welcome"
import Container from "../components/container"
import SEO from "../components/seo"
import js from "../images/js.png"
import vue from "../images/vue.png"
import react from "../images/react.png"

const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3%;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`

const LanguageImage = styled.div`
  display: block;
  margin-top: 20px;
  img {
    padding-right: 10px;
    vertical-align: middle;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <ProfilContainer>
        <div>
          <Welcome />
          <LanguageImage>
            <img src={js} alt="js" width="40" />
            <img src={react} alt="react" width="40" />
            <img src={vue} alt="vue" width="40" />
          </LanguageImage>
        </div>
      </ProfilContainer>
    </Wrapper>
  </Layout>
)

export default IndexPage
