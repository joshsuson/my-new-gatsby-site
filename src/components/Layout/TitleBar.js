import React from "react"
import styled from "styled-components"

const TitleBarWrapper = styled.div`
  width: auto;
  background-color: var(--title-bar);
  padding: 0 0.75rem;
  border-radius: 5px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid hsla(207, 1%, 69%, 0.3);
  position: sticky;
  top: 0;
`

const CircleWrapper = styled.div`
  display: flex;
  margin-right: auto;
`

const NavCircle = styled.div`
  height: 12px;
  width: 12px;
  margin-right: 8px;
  background-color: ${props => props.circleColor};
  border-radius: 100%;
`

const Title = styled.h2`
  color: var(--secondary-text);
  font-family: "Fira Sans", sans-serif;
  width: 55%;
`

export const TitleBar = () => {
  return (
    <TitleBarWrapper>
      <CircleWrapper>
        <NavCircle circleColor="var(--apple-red)" />
        <NavCircle circleColor="var(--apple-yellow)" />
        <NavCircle circleColor="var(--apple-green)" />
      </CircleWrapper>
      <Title>joshsuson.com</Title>
    </TitleBarWrapper>
  )
}
