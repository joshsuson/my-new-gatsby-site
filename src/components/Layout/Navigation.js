import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { IoMdDocument } from "react-icons/io"
import { navItems } from "../../data/navItems"

const CustomLink = styled(Link)`
  color: var(--primary-text);
  font-weight: 300;
  font-family: "Fira Sans", sans-serif;
  font-size: 1.25rem;
  width: 100%;

  &[aria-current="page"] {
    background-color: var(--lightest-grey);
  }
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    background-color: var(--lightest-grey);
  }
`

const NavWrapper = styled.div`
  margin-left: 24px;
`

export const PageIcon = styled(IoMdDocument)`
  color: var(--page-icon);
  margin-right: 4px;
`

export const Navigation = () => {
  return (
    <NavWrapper>
      {navItems.map(({ name, slug }) => (
        <LinkWrapper key={name}>
          <CustomLink to={slug}>
            <PageIcon /> {name}
          </CustomLink>
        </LinkWrapper>
      ))}
    </NavWrapper>
  )
}
