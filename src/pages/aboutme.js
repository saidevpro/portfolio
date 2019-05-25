import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Avatar from "../components/avatar"
import Logo from "../images/gatsby-astronaut.png"

const Wrapper = styled.div`
  display: block;
  width: 700px;
  max-width: 100%;
  margin: 2% auto;
  padding: 1rem;
  background-color: #ffffff;
`

const Primary = styled.div`
  font-weight: 600;
  font-size: 2rem;
  line-height: 1.2;
  color: #684a99;
`

const Secondary = styled.div`
  font-size: 1.4rem;
  color: #403e3e;
`

const Paragraph = styled(Secondary)`
  margin-top: 15px;
  font-size: 1.2rem;
  text-align: justify;
  line-height: 1.1;
`

export default () => (
  <Layout>
    <SEO title="About me" />
    <Wrapper>
      <div style={{ textAlign: "center" }}>
        <Avatar size={5} src={Logo} alt="profil image" />
        <br />
        <br />
        <Primary>Sow Mamadou Saïdou</Primary>
        <Secondary>Freelance Web and mobile developper</Secondary>
      </div>
      <section style={{ marginTop: "40px" }}>
        <Secondary style={{ color: "#684a99" }}>
          &#8627;&nbsp;Description
        </Secondary>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          dignissim lorem vitae lacus rutrum, ut feugiat justo imperdiet.
          Praesent aliquet dolor eu sapien condimentum elementum. Nulla bibendum
          augue pharetra, mollis turpis in, accumsan arcu.
        </Paragraph>
      </section>
      <section style={{ marginTop: "40px" }}>
        <Secondary style={{ color: "#684a99" }}>&#8627;&nbsp;Skills</Secondary>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          dignissim lorem vitae lacus rutrum, ut feugiat justo imperdiet.
        </Paragraph>
      </section>
    </Wrapper>
  </Layout>
)
