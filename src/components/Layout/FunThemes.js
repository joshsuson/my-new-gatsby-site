import React from "react"
import { ThemeContainer } from "."
import { ThemeSectionHeading } from "../../styles/ModalThemeStyles"
import { farColors, shadesOfPurpleColors } from "../../styles/themeColors"

export const FunThemes = () => {
  return (
    <div>
      <ThemeSectionHeading>Off The Wall</ThemeSectionHeading>
      <ThemeContainer
        title="Far"
        colorTheme={farColors}
        borderColor="hsla(100, 100%, 100%, .5)"
        id="far"
      />
      <ThemeContainer
        title="Shades of Purple"
        colorTheme={shadesOfPurpleColors}
        borderColor="hsla(100, 100%, 100%, .5)"
        id="shadesOfPurple"
      />
    </div>
  )
}
