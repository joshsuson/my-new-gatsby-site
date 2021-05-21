import styled from "styled-components"

export const ThemeSectionHeading = styled.h3`
  color: var(--secondary-text);
  font-size: 1.75rem;
  text-transform: uppercase;
`
export const ThemeWrapper = styled.div`
  margin-bottom: 8px;
  cursor: pointer;
  padding: 4px;
  position: relative;
  background-color: ${props =>
    props.selectedTheme.name === props.id
      ? "var(--light-grey)"
      : "transparent"};

  &:hover {
    background-color: var(--light-grey);
  }
`

export const ThemeTitle = styled.h4`
  color: var(--primary-text);
  font-size: 1.5rem;
  font-weight: 300;
`

export const ColorPalette = styled.div`
  display: flex;
  margin-top: 4px;
`

export const ColorSquare = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${props => props.color};
  border: ${props => (props.border ? props.border : "none")};
`
