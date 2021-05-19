import React, { useState, useContext, createContext } from "react"

const SiteContext = createContext()

export function useSiteContext() {
  return useContext(SiteContext)
}

export default function SiteContextProvider({ children }) {
  const [showCode, setShowCode] = useState(false)

  const siteData = {
    showCode,
    setShowCode,
  }

  return (
    <SiteContext.Provider value={siteData}>
      <>{children}</>
    </SiteContext.Provider>
  )
}
