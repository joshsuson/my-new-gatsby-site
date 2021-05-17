import React from "react"
import styled from "styled-components"
import { TopNav, SettingsButtons } from "."

const TopWrapper = styled.div`
  background-color: var(--grey);
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  box-shadow: 0px 1px 3px hsla(0, 0%, 0%, 0.5);
  position: sticky;
  top: 31px;
  z-index: 10;
`

export const TopNavBar = () => {
  return (
    <TopWrapper>
      <TopNav />
      <SettingsButtons />
    </TopWrapper>
  )
}
