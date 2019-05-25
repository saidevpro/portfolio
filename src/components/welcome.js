import React from "react"
import styled from "@emotion/styled"

const Greeting = styled.h1`
  margin-bottom: 25px;
  font-size: 3rem;
  color: #704c9c;
`

const Description = styled.p`
  max-width: 380px;
  font-size: 1.5rem;
  color: #616161;
`

const BreakRow = styled.div`
  max-width: 100px;
  height: 7px;
  background-color: #704c9c;
`

export default ({ className }) => (
  <section className={className}>
    <Greeting>
      Hello,
      <br />
      I'm Sow Saïdou
    </Greeting>
    <Description>
      I'm freelance in web and mobile development in Morocco
    </Description>
    <BreakRow />
  </section>
)
