import React, { useState, useEffect } from "react"
import GlobalStyles from "../../styles/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"
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
  const [theme, setTheme] = useState(cssTheme)

  useEffect(() => {
    setTheme(cssTheme)
  }, [cssTheme, theme])

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles modalOpen={modalOpen} />
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
    </ThemeProvider>
  )
}
