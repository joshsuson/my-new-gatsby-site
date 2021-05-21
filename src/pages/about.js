import React from "react"
import { CopyBlock } from "react-code-blocks"
import aboutCode from "../data/aboutPageCode"
import styled from "styled-components"
import { useSiteContext } from "../context/SiteContext"

const NoButton = styled.div`
  > div > button {
    display: none;
  }
`

export default function AboutPage() {
  const { theme } = useSiteContext()
  return (
    <div>
      <NoButton>
        <CopyBlock
          language="jsx"
          text={aboutCode}
          showLineNumbers={true}
          theme={theme}
          codeBlock
        />
      </NoButton>
    </div>
  )
}
