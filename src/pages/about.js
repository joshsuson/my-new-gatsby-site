import React from "react"
import { themes } from "../styles/themeColors"

const lightThemes = themes.filter(theme => theme.themeType === "light")

const darkThemes = themes.filter(theme => theme.themeType === "dark")

const handleClick = title => {
  const clickedTheme = themes.find(theme => theme.title === title)
  console.log(clickedTheme.colors)
}

export default function AboutPage() {
  return (
    <div>
      <h1>Dark Themes</h1>
      {darkThemes.map(theme => (
        <button onClick={() => handleClick(theme.title)}>{theme.label}</button>
      ))}
      <h1>Light Themes</h1>
      {lightThemes.map(theme => (
        <button>{theme.label}</button>
      ))}
    </div>
  )
}
