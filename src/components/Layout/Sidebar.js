import React from "react"
import styled from "styled-components"
import { BsChevronDown, BsChevronRight } from "react-icons/bs"
import { RiFolder3Fill } from "react-icons/ri"
import { Navigation } from "."

const SidebarWrapper = styled.div`
  height: 100vh;
  width: 255px;
  background-color: var(--grey);
  position: fixed;
  top: 31px;
  padding: 1rem;
  border-right: hsla(0, 0%, 0%, 0.75) 1px solid;
`

const NavHeading = styled.h3`
  text-transform: ${props => props.case};
  color: var(--primary-text);
  font-weight: ${props => props.weight};
  font-family: "Fira Sans", sans-serif;
  font-size: 1.25rem;
`

const NavWrapper = styled.div`
  margin-top: 1rem;
`
const MainHeadingDiv = styled.div`
  display: flex;
  align-items: center;
`

const DownArrow = styled(BsChevronDown)`
  color: var(--secondary-text);
  margin-right: 4px;
`

const RightArrow = styled(BsChevronRight)`
  color: var(--secondary-text);
  margin-right: 4px;
`

const FolderIcon = styled(RiFolder3Fill)`
  color: var(--secondary-text);
  margin-right: 8px;
`

const FolderDiv = styled.div`
  display: flex;
  align-items: center;
`
const FolderDivWrapper = styled.div`
  margin-top: 4px;
  margin-left: 12px;
`

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <NavHeading weight="300" case="uppercase">
        Explorer
      </NavHeading>
      <NavWrapper>
        <MainHeadingDiv>
          <DownArrow />
          <NavHeading weight="400" case="uppercase">
            joshsuson.com
          </NavHeading>
        </MainHeadingDiv>
        <FolderDivWrapper>
          <FolderDiv>
            <RightArrow />
            <FolderIcon />
            <NavHeading weight="300" case="lowercase">
              components
            </NavHeading>
          </FolderDiv>
          <FolderDiv>
            <RightArrow />
            <FolderIcon />
            <NavHeading weight="300" case="lowercase">
              data
            </NavHeading>
          </FolderDiv>
          <FolderDiv>
            <DownArrow />
            <FolderIcon />
            <NavHeading weight="300" case="lowercase">
              pages
            </NavHeading>
          </FolderDiv>
          <Navigation />
          <FolderDiv>
            <RightArrow />
            <FolderIcon />
            <NavHeading weight="300" case="lowercase">
              public
            </NavHeading>
          </FolderDiv>
          <FolderDiv>
            <RightArrow />
            <FolderIcon />
            <NavHeading weight="300" case="lowercase">
              styles
            </NavHeading>
          </FolderDiv>
        </FolderDivWrapper>
      </NavWrapper>
    </SidebarWrapper>
  )
}
