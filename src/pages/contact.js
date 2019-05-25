import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MainWrapper = styled.div`
  position: relative;
  display: block;
  height: 100%;
  padding: 2% 1rem;
`

const ContactContainer = styled.div`
  display: block;
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
  background-color: #ffffff;
`

const PageTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 500;
  color: #5f5f5f;
`

const PrimaryPhrase = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  margin-top: 25px;
  line-height: 1.2;
  color: #684a99;
`

const SecondaryPhrase = styled.div`
  font-size: 1.2rem;
  margin-top: 36px;
  color: #403e3e;
`

const Contact = styled.p`
  line-height: 1.4;
  color: #684a99;
  font-weight: 600;
`

export default () => (
  <Layout>
    <SEO title="contact" />
    <MainWrapper>
      <ContactContainer>
        <PageTitle>Contact</PageTitle>
        <PrimaryPhrase>
          If you've got a project in mind, why not get in touch. Let's work
          together. &#9787;
        </PrimaryPhrase>
        <SecondaryPhrase>
          You can contact me on: <br />
          <Contact>
            Phone: +212 681 282 882 <br />
            Em&#64;il: saidev@gmail.com <br />
          </Contact>
        </SecondaryPhrase>
      </ContactContainer>
    </MainWrapper>
  </Layout>
)
