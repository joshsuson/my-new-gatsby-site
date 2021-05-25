import React from "react"
import { ThemeContainer } from "."
import { ThemeSectionHeading } from "../../styles/ModalThemeStyles"
import { themes } from "../../styles/themeColors"

const funThemes = themes.filter(theme => theme.themeType === "fun")

export const FunThemes = () => {
  return (
    <div>
      <ThemeSectionHeading>Off The Wall</ThemeSectionHeading>
      {funThemes.map(theme => (
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
