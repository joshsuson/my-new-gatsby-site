import React from "react"
import { ThemeContainer } from "."
import { ThemeSectionHeading } from "../../styles/ModalThemeStyles"
import { themes } from "../../styles/themeColors"

const darkThemes = themes.filter(theme => theme.themeType === "dark")

export const DarkThemes = () => {
  return (
    <div>
      <ThemeSectionHeading>Dark Themes</ThemeSectionHeading>
      {darkThemes.map(theme => (
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
