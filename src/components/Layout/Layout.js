import React from "react"
import GlobalStyles from "../../styles/GlobalStyles"
import styled from "styled-components"
import { TitleBar, Sidebar, TopNavBar } from "."

const PageWrapper = styled.div`
  background-color: var(--background);
  margin-bottom: 32px;
`

const MainWrapper = styled.div`
  margin-left: 255px;
  height: 100vh;
`

const InnerWrapper = styled.div`
  width: min(90%, 1000px);
`

export const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <TitleBar />
      <PageWrapper>
        <Sidebar />
        <MainWrapper>
          <TopNavBar />
          <InnerWrapper>{children}</InnerWrapper>
        </MainWrapper>
      </PageWrapper>
    </div>
  )
}
