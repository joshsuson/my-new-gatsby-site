import React from "react"
import styled from "styled-components"
import { BiCodeAlt } from "react-icons/bi"
import { RiSettings3Fill } from "react-icons/ri"
import { HiOutlineDocumentText } from "react-icons/hi"
import { useSiteContext } from "../../context/SiteContext"

const ButtonWrapper = styled.div`
  grid-column: 5 / span 4;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 8px;
`

const IconDiv = styled.div`
  margin-right: 8px;
  color: ${props =>
    props.active ? "var(--primary-text)" : "var(--secondary-text)"};
  font-size: 2rem;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: ${props => (props.active ? "var(--light-grey)" : "transparent")};

  &:hover {
    background-color: var(--light-grey);
    color: var(--primary-text);
  }
`

export const SettingsButtons = () => {
  const { setShowCode, showCode, handleOpenModal } = useSiteContext()
  return (
    <ButtonWrapper>
      <IconDiv
        active={showCode ? true : false}
        onClick={() => setShowCode(true)}
      >
        <BiCodeAlt />
      </IconDiv>
      <IconDiv
        active={showCode ? false : true}
        onClick={() => setShowCode(false)}
      >
        <HiOutlineDocumentText />
      </IconDiv>
      <IconDiv onClick={() => handleOpenModal()}>
        <RiSettings3Fill />
      </IconDiv>
    </ButtonWrapper>
  )
}
