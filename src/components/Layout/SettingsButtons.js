import React from "react"
import styled from "styled-components"
import { BiCodeAlt } from "react-icons/bi"
import { RiSettings3Fill } from "react-icons/ri"
import { HiOutlineDocumentText } from "react-icons/hi"

const ButtonWrapper = styled.div`
  grid-column: 5 / span 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px;
`

const IconDiv = styled.div`
  margin-right: 8px;
  color: var(--secondary-text);
  font-size: 2rem;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    background-color: var(--background);
    color: var(--primary-text);
  }
`

export const SettingsButtons = () => {
  return (
    <ButtonWrapper>
      <IconDiv>
        <BiCodeAlt />
      </IconDiv>
      <IconDiv>
        <HiOutlineDocumentText />
      </IconDiv>
      <IconDiv>
        <RiSettings3Fill />
      </IconDiv>
    </ButtonWrapper>
  )
}
