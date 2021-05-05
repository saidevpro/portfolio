import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import {PrimaryText} from "../components/text"
import {SecondaryText} from "../components/text"
import Space from "../components/space"
import Quote from "../components/quote"
import BannerImage from "../components/workbannerimage"

const plans = [
  "Undestand the project ",
  "Interview customer about the project",
  "Put the customer through the work process",
  "Deliver a quality application",
  "Respect delay",
  "Customer will pay after the project is done",
]

export default () => (
  <Layout>
    <SEO title="contact" />
    <Container xl={7} lg={8}>
      <section>
        <BannerImage />
        <PrimaryText size={2} lineHeight={1.2} as="h3">
          How do I plan a project in order to deliver the best services to my
          customers ?
        </PrimaryText>
        <Quote
          content={
            "The customers perception is your reality. What they think about your products , MATTER. If you dont put your customers perception first, THE GAME IS OVER."
          }
          author="Sharfaraz Ahmed"
        />
        <p
          css={css`
            font-size: 1.13rem;
            line-height: 1.2;
            text-align: justify;
          `}
        >
          For over four decades user involvement has been considered intuitively
          to lead to user satisfaction, which plays a pivotal role in successful
          to lead to user satisfaction, which plays a pivotal role in successful
          outcome of a software project.
        </p>
        <Space size={3} />
        <ol
          css={css`
            padding-left: 5em;
          `}
        >
          {plans.map(plan => (
            <SecondaryText size={1.2} lineHeight={1.8} as="li" key={plan}>
              {plan}
            </SecondaryText>
          ))}
        </ol>
      </section>
      <Space size={5} />
    </Container>
  </Layout>
)
