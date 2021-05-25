import React from "react"
import {
  ThemeWrapper,
  ThemeTitle,
  ColorPalette,
  ColorSquare,
} from "../../styles/ModalThemeStyles"
import styled from "styled-components"
import { useSiteContext } from "../../context/SiteContext"

const ButtonOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const ThemeContainer = ({
  id,
  title,
  colorTheme,
  borderColor,
  theme,
}) => {
  const { handleSelectTheme, selectedTheme } = useSiteContext()
  return (
    <>
      <ThemeWrapper
        selectedTheme={selectedTheme}
        id={id}
        onClick={() => handleSelectTheme(theme)}
      >
        <ButtonOverlay></ButtonOverlay>
        <ThemeTitle>{title}</ThemeTitle>
        <ColorPalette>
          <ColorSquare
            color={colorTheme.background}
            border={`1px solid ${borderColor}`}
          />
          <ColorSquare color={colorTheme.firstColor} />
          <ColorSquare color={colorTheme.secondColor} />
          <ColorSquare color={colorTheme.thirdColor} />
          <ColorSquare color={colorTheme.fourthColor} />
          <ColorSquare color={colorTheme.fifthColor} />
        </ColorPalette>
      </ThemeWrapper>
    </>
  )
}
