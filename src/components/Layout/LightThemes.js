import React from "react"
import { ThemeContainer } from "."
import { themes } from "../../styles/themeColors"
import { ThemeSectionHeading } from "../../styles/ModalThemeStyles"

const lightThemes = themes.filter(theme => theme.themeType === "light")

export const LightThemes = () => {
  return (
    <div>
      <ThemeSectionHeading>Light Themes</ThemeSectionHeading>
      {lightThemes.map(theme => (
        <ThemeContainer
          title={theme.label}
          colorTheme={theme.colors}
          id={theme.id}
          key={theme.id}
          borderColor="hsla(0, 0%, 0%, .5)"
          theme={theme}
        />
      ))}
    </div>
  )
}
