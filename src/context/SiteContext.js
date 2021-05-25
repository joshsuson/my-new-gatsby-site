import React, { useState, useContext, createContext } from "react"
import {
  dracula,
  tomorrow,
  atomOneDark,
  atomOneLight,
  far,
  shadesOfPurple,
} from "react-code-blocks"
import { themes } from "../styles/themeColors"

const SiteContext = createContext()

export function useSiteContext() {
  return useContext(SiteContext)
}

const codeThemes = [
  {
    name: "dracula",
    theme: { ...dracula },
  },
  {
    name: "tomorrow",
    theme: { ...tomorrow },
  },
  {
    name: "atomOneDark",
    theme: { ...atomOneDark },
  },
  {
    name: "atomOneLight",
    theme: { ...atomOneLight },
  },
  {
    name: "far",
    theme: { ...far },
  },
  {
    name: "shadesOfPurple",
    theme: { ...shadesOfPurple },
  },
]

const firstCssTheme = themes.find(theme => theme.id === "atomOneDark")

export default function SiteContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [theme, setTheme] = useState(atomOneDark)
  const [selectedTheme, setSelectedTheme] = useState({})
  const [cssTheme, setCssTheme] = useState(firstCssTheme.colors)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    if (selectedTheme) {
      setSelectedTheme({})
    }
    setModalOpen(false)
  }

  const handleSelectTheme = theme => {
    setSelectedTheme(theme)
  }

  const handleConfirmTheme = () => {
    const newCodeTheme = codeThemes.find(
      theme => theme.name === selectedTheme.id
    )
    const newCssTheme = themes.find(theme => theme.id === selectedTheme.id)
    setTheme(newCodeTheme.theme)
    setCssTheme(newCssTheme.colors)
  }

  const siteData = {
    showCode,
    setShowCode,
    theme,
    cssTheme,
    modalOpen,
    handleCloseModal,
    handleOpenModal,
    handleSelectTheme,
    selectedTheme,
    handleConfirmTheme,
  }

  return (
    <SiteContext.Provider value={siteData}>
      <>{children}</>
    </SiteContext.Provider>
  )
}
