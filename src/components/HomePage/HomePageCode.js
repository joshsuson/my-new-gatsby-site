import React from "react"
import styled from "styled-components"
import { CopyBlock } from "react-code-blocks"
import { homePageCode } from "../../data/homePageCode"
import { useSiteContext } from "../../context/SiteContext"

const NoButton = styled.div`
  > div > button {
    display: none;
  }
`

export const HomePageCode = () => {
  const { theme } = useSiteContext()
  return (
    <NoButton>
      <CopyBlock language="jsx" text={homePageCode} theme={theme} codeBlock />
    </NoButton>
  )
}
