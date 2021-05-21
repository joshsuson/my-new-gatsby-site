import React, { useState, useContext, createContext } from "react"
import {
  dracula,
  tomorrow,
  atomOneDark,
  atomOneLight,
  far,
  shadesOfPurple,
} from "react-code-blocks"
import {
  draculaColors,
  atomOneDarkColors,
  tomorrowColors,
  atomOneLightColors,
  farColors,
  shadesOfPurpleColors,
} from "../styles/themeColors"

const SiteContext = createContext()

export function useSiteContext() {
  return useContext(SiteContext)
}

export default function SiteContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [theme, setTheme] = useState(atomOneDark)
  const [selectedTheme, setSelectedTheme] = useState({})
  const [colorScheme, setColorScheme] = useState({ ...atomOneDarkColors })
  const [cssTheme, setCssTheme] = useState({
    background: colorScheme.background,
    titleBar: colorScheme.titleBar,
    darkGrey: colorScheme.darkGrey,
    grey: colorScheme.grey,
    lightGrey: colorScheme.lightGrey,
    primaryText: colorScheme.primaryText,
    secondaryText: colorScheme.secondaryText,
    firstColor: colorScheme.firstColor,
    secondColor: colorScheme.secondColor,
    thirdColor: colorScheme.thirdColor,
    fourthColor: colorScheme.fourthColor,
    fifthColor: colorScheme.fifthColor,
    scrollbar: colorScheme.scrollbar,
    layoutBorder: colorScheme.layoutBorder,
  })

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    if (selectedTheme) {
      setSelectedTheme({})
    }
    setModalOpen(false)
  }

  const handleSelectTheme = e => {
    const id = e.target.parentElement.id
    switch (id) {
      case "atomOneLight":
        setSelectedTheme(prevTheme => ({
          ...prevTheme,
          name: "atomOneLight",
          theme: atomOneLight,
        }))
        break
      case "atomOneDark":
        setSelectedTheme(prevTheme => ({
          ...prevTheme,
          name: "atomOneDark",
          theme: atomOneDark,
        }))
        break
      case "tomorrow":
        setSelectedTheme(prevTheme => ({
          ...prevTheme,
          name: "tomorrow",
          theme: tomorrow,
        }))
        break
      case "dracula":
        setSelectedTheme(prevTheme => ({
          ...prevTheme,
          name: "dracula",
          theme: dracula,
        }))
        break
      case "far":
        setSelectedTheme(prevTheme => ({
          ...prevTheme,
          name: "far",
          theme: far,
        }))
        break
      case "shadesOfPurple":
        setSelectedTheme(prevTheme => ({
          ...prevTheme,
          name: "shadesOfPurple",
          theme: shadesOfPurple,
        }))
        break
      default:
        console.log("Oops! Something when wrong. Try selecting another theme.")
    }
  }

  const handleConfirmTheme = () => {
    if (selectedTheme.theme) {
      setTheme(selectedTheme.theme)
    } else {
      console.log("Select a theme")
    }
    switch (selectedTheme.name) {
      case "atomOneLight":
        console.log("working")
        setColorScheme({ ...atomOneLightColors })
        break
      case "atomOneDark":
        setColorScheme({ ...atomOneDarkColors })
        break
      case "tomorrow":
        setColorScheme({ ...tomorrowColors })
        break
      case "dracula":
        setColorScheme({ ...draculaColors })
        break
      case "far":
        setColorScheme({ ...farColors })
        break
      case "shadesOfPurple":
        setColorScheme({ ...shadesOfPurpleColors })
        break
      default:
        console.log("Select a theme")
        break
    }
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
    colorScheme,
  }

  return (
    <SiteContext.Provider value={siteData}>
      <>{children}</>
    </SiteContext.Provider>
  )
}
