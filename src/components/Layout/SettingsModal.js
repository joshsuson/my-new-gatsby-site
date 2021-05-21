import React from "react"
import styled from "styled-components"
import { LightThemes, DarkThemes, FunThemes } from "."
import { GrClose } from "react-icons/gr"
import { useSiteContext } from "../../context/SiteContext"

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.8);
  z-index: 100;
  display: grid;
  place-content: center;
`

const Modal = styled.div`
  background-color: var(--background);
  width: 500px;
  padding: 16px;
`
const Heading = styled.h2`
  color: var(--primary-text);
  font-size: 2.5rem;
`

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  color: var(--primary-text);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
  left: 95%;
  transform: translateY(-8px);
  cursor: pointer;

  &:hover {
    background-color: var(--light-grey);
  }

  > svg > path {
    stroke: var(--primary-text);
  }
`

const ButtonDiv = styled.div`
  margin-top: 24px;
`

const Cancel = styled.button`
  padding: 8px 16px;
  background-color: var(--first-color);
  color: var(--primary-text);
  text-transform: uppercase;
  border: none;
  font-family: "Fira Code", monospace;
  font-size: 1.75rem;
  margin-right: 16px;
  cursor: pointer;

  &:hover {
    position: relative;
    transform: scale(1.15);
    transition: transform 0.5s ease-in-out;
  }
`

const Confirm = styled.button`
  padding: 8px 16px;
  background-color: var(--third-color);
  color: var(--secondary-text);
  text-transform: uppercase;
  border: none;
  font-family: "Fira Code", monospace;
  font-size: 1.75rem;
  cursor: pointer;

  &:hover {
    position: relative;
    transform: scale(1.15);
    transition: transform 0.5s ease-in-out;
  }
`

export const SettingsModal = () => {
  const { handleCloseModal, handleConfirmTheme, colorScheme } = useSiteContext()
  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={() => handleCloseModal()}>
          <GrClose />
        </CloseButton>
        <Heading>Choose your theme:</Heading>
        <LightThemes />
        <DarkThemes />
        <FunThemes />
        <ButtonDiv>
          <Cancel onClick={() => handleCloseModal()}>Cancel</Cancel>
          <Confirm onClick={() => handleConfirmTheme()}>Confirm</Confirm>
          <button onClick={() => console.log(colorScheme)}>Color Scheme</button>
        </ButtonDiv>
      </Modal>
    </Overlay>
  )
}
