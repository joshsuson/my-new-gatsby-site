import * as React from "react"
import { FormattedHomePage, HomePageCode } from "../components/HomePage"
import { useSiteContext } from "../context/SiteContext"

const IndexPage = () => {
  const { showCode } = useSiteContext()
  return (
    <div>
      {!showCode && <FormattedHomePage />}
      {!!showCode && <HomePageCode />}
    </div>
  )
}

export default IndexPage
