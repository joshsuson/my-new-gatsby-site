import React from "react"
import { ThemeContainer } from "."
import { ThemeSectionHeading } from "../../styles/ModalThemeStyles"
import { draculaColors, atomOneDarkColors } from "../../styles/themeColors"

export const DarkThemes = () => {
  return (
    <div>
      <ThemeSectionHeading>Dark Themes</ThemeSectionHeading>
      <ThemeContainer
        title="Atom One Dark"
        colorTheme={atomOneDarkColors}
        borderColor="hsla(100, 100%, 100%, .5)"
        id="atomOneDark"
      />
      <ThemeContainer
        title="Dracula"
        colorTheme={draculaColors}
        borderColor="hsla(100, 100%, 100%, .5)"
        id="dracula"
      />
    </div>
  )
}
