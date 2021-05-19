import React from "react"
import styled from "styled-components"
import { HomePageImports, HomePageCSS } from "."
import { EmptyRow } from "../CodeComponents"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 4px 32px;
`

export const HomePageCode = () => {
  return (
    <Wrapper>
      <HomePageImports />
      <EmptyRow number="9" />
      <HomePageCSS />
    </Wrapper>
  )
}
