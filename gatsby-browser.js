import React from "react"
import { Layout } from "./src/components/Layout"
import SiteContextProvider from "./src/context/SiteContext"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <SiteContextProvider>{element}</SiteContextProvider>
}
