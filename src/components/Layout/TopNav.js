import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { navItems } from "../../data/navItems"
import { PageIcon } from "."

const TopNavWrapper = styled.div`
  grid-column: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

const LinkWrapper = styled.div`
  border-right: 1px solid hsla(207, 1%, 69%, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background);
  cursor: pointer;

  &:hover {
    background-color: var(--lightest-grey);
  }
`

const CustomLink = styled(Link)`
  color: var(--primary-text);
  font-family: "Fira Sans", sans-serif;
  text-transform: lowercase;
  font-size: 1.25rem;
  text-align: center;
  padding: 4px;
  width: 100%;

  &[aria-current="page"] {
    background-color: var(--lightest-grey);
  }
`

export const TopNav = () => {
  return (
    <TopNavWrapper>
      {navItems.map(item => (
        <LinkWrapper key={item.name}>
          <CustomLink to={item.slug}>
            <PageIcon />
            {item.name}
          </CustomLink>
        </LinkWrapper>
      ))}
    </TopNavWrapper>
  )
}
