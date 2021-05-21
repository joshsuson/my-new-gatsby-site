import React from "react"
import { ThemeContainer } from "."
import { atomOneLightColors, tomorrowColors } from "../../styles/themeColors"
import { ThemeSectionHeading } from "../../styles/ModalThemeStyles"

export const LightThemes = () => {
  return (
    <div>
      <ThemeSectionHeading>Light Themes</ThemeSectionHeading>
      <ThemeContainer
        title="Atom One Light"
        colorTheme={atomOneLightColors}
        borderColor="hsla(0, 0%, 0%, .5)"
        id="atomOneLight"
      />
      <ThemeContainer
        title="Tomorrow"
        colorTheme={tomorrowColors}
        borderColor="hsla(0, 0%, 0%, .5)"
        id="tomorrow"
      />
    </div>
  )
}
