import React, { useEffect, useRef } from "react"
import styled from "@emotion/styled"
import { css, keyframes } from "@emotion/core"

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import SupportedLanguages from "../components/supportedlanguages"
import Space from "../components/space"
import {PrimaryText} from "../components/text"
import {SecondaryText} from "../components/text"
import Text from "../components/text"

const FloattingActionButton = styled.a`
  position: fixed;
  bottom: 3.5rem;
  left: 50%;
  padding: 5px 20px;
  border-radius: 20px;
  background-color: #704c9c;
  color: #ffffff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  text-decoration: none;
  transform: translateX(-50%);
  transition: all 0.3s;
`

const animationMarginTopOrigin = 40;

const animateTitle = keyframes`
	0% {
		text-shadow: 0 0 50px #fff;
		letter-spacing: 5px;
		opacity: 0.2;
    transform: translateY(${animationMarginTopOrigin}px); 
	}
	50% {
		text-shadow: 0 0 1px #fff;
		letter-spacing: 0;
		opacity: 1;
	}
  100% {
    transform: translateY(0); 
  }
`; 


const Title = styled(PrimaryText)`
  margin-bottom: 25px;
  text-transform: uppercase;
  font-family: "Ubuntu Mono";
  // animation: ${animateTitle} 3s forwards;
`; 

const animateDescription = keyframes`
  0% {
    transform: translateY(${animationMarginTopOrigin}px); 
  }
  100% {
    transform: translateY(0); 
  }
`;

const Description = styled(Text)`
  max-width: 440px;
  margin: 1rem auto;
  // animation: ${animateDescription} 2s forwards;
`

const Languages = styled(SupportedLanguages)`
  justify-content: center;
`; 

const IndexPage = ({ data }) => {
  return (
    <Layout>
    <SEO title="Acceuil" />
    <Container>
      <Space size={3} />
      <section
        css={css`
          margin-top: 10vh;
          text-align: center;
        `}
      >
        <Title as="h1" size={2.7} >
          Bienvenu sur mon portfolio
        </Title>
        <Description lineHeight={1.6} size={1.3} >
          Je m'appelle Sow Mamadou Saidou, freelance en&nbsp;
           <PrimaryText as ="strong" css={css`
            font-weight: bolder;
            `}>Développement web </PrimaryText> et&nbsp;
          <PrimaryText as="span" css={css`
            background-image: url('/color-palette.jpg');
            background-size: contain;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            font-weight: bolder;
            font-size: 1.5rem;
            `}>UI/UX Designer</PrimaryText> avec plus de 3 années d'expériences depuis le
          Maroc.
        </Description>
        <Space size={2} />
        <Languages size={45} />
      </section>
    </Container>
  </Layout>
  )
}

export default IndexPage
