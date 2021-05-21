import React from "react"
import GlobalStyles from "../../styles/GlobalStyles"
import styled from "styled-components"
import { TitleBar, Sidebar, TopNavBar, SettingsModal } from "."
import { useSiteContext } from "../../context/SiteContext"

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
  const { cssTheme, modalOpen } = useSiteContext()

  return (
    <div>
      <GlobalStyles theme={cssTheme} modalOpen={modalOpen} />
      {!!modalOpen && <SettingsModal />}
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
