import React from "react"
import GlobalStyles from "../../styles/GlobalStyles"
import styled from "styled-components"
import { TitleBar, Sidebar, TopNavBar } from "."

const PageWrapper = styled.div`
  background-color: var(--background);
`

const MainWrapper = styled.div`
  margin-left: 255px;
  height: 100vh;
`

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <TitleBar />
      <PageWrapper>
        <Sidebar />
        <MainWrapper>
          <TopNavBar />
          {children}
        </MainWrapper>
      </PageWrapper>
    </>
  )
}
