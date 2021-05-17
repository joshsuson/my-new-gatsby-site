import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaReact } from "react-icons/fa"

const Wrapper = styled.div`
  padding: 24px;
`

const ImageDiv = styled.div`
  width: 40%;
`

const CustomImage = styled(GatsbyImage)`
  width: 100%;
  box-shadow: 5px 5px 1px var(--second-color), -5px -5px 1px var(--third-color);
`

const MainHeading = styled.h1`
  color: var(--fifth-color);
  font-size: 4rem;
  margin-top: 12px;
`

const Intro = styled.p`
  margin: 0;
  padding: 0;
`
const SpecialIntro = styled.span`
  color: var(--first-color);
  font-size: 2.5rem;
`
const ReactIcon = styled.span`
  color: #5dd3f3;
  margin-right: 6px;
`

export const Jumbotron = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "075A6510" }) {
        childImageSharp {
          gatsbyImageData(width: 1500)
        }
      }
    }
  `)

  const image = getImage(data.file)
  return (
    <Wrapper>
      <ImageDiv>
        <CustomImage image={image} />
      </ImageDiv>
      <MainHeading>
        Hi!{" "}
        <span role="img" aria-label="waving emoji">
          👋{" "}
        </span>
        My name is Josh Suson.
      </MainHeading>
      <Intro>
        <SpecialIntro>
          I'm a{" "}
          <ReactIcon>
            <FaReact />
          </ReactIcon>
          React developer.
        </SpecialIntro>
      </Intro>
    </Wrapper>
  )
}
