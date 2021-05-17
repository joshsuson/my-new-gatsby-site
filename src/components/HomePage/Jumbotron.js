import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaReact } from "react-icons/fa"

const Wrapper = styled.div`
  padding: 24px;
`

const ImageDiv = styled.div`
  width: 70%;
`

const CustomImage = styled(GatsbyImage)`
  width: 100%;
  box-shadow: 5px 5px 1px var(--second-color), -5px -5px 1px var(--third-color);
`

const MainHeading = styled.h1`
  color: var(--fifth-color);
  font-size: 4rem;
  margin-top: 24px;
  margin-bottom: 12px;
`

const Intro = styled.p`
  margin: 0;
  padding: 0;
  color: var(--primary-text);
  font-size: 2rem;
  margin-bottom: 24px;
`
const SpecialIntro = styled.span`
  color: var(--first-color);
  font-size: 2.5rem;
`
const ReactIcon = styled.span`
  color: #5dd3f3;
  margin-right: 6px;
`

const ButtonDiv = styled.div`
  margin-bottom: 56px;
`

const CustomButton = styled.button`
  cursor: pointer;
  padding: 16px 4px 16px 4px;
  background: linear-gradient(var(--third-color) 0 0) 50% calc(-3px - 100%) /
    var(--d, 0%) 200% no-repeat;
  border: none;
  font-family: "Fira Code", monospace;
  text-transform: uppercase;
  color: var(--third-color);
  font-size: 2rem;
  transition: 0.3s, background-size 0.3s 0.3s;

  &:hover {
    --d: 100%;
    background-position: 50% 0%;
    color: var(--background);
    transition: 0.3s, background-position 0.3s 0.3s, color 0.3s 0.3s;
  }
`

const SecondaryButton = styled.button`
  cursor: pointer;
  margin-left: 24px;
  padding: 16px 8px 16px 8px;
  border: none;
  font-family: "Fira Code", monospace;
  text-transform: uppercase;
  font-size: 2rem;
  color: var(--fourth-color);
  background: linear-gradient(var(--fourth-color) 0 0) top,
    linear-gradient(var(--fourth-color) 0 0) left,
    linear-gradient(var(--fourth-color) 0 0) bottom,
    linear-gradient(var(--fourth-color) 0 0) right;
  background-size: var(--d, 0) 3px, 3px var(--d, 0);
  background-repeat: no-repeat;
  transition: 0.5s;

  &:hover {
    --d: 100%;
  }
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
        </SpecialIntro>{" "}
        I focus on building interesting front end experiences that hopefully
        provide value to people's lives. I primarily use React and have recently
        started rounding out my back end skills. On top of that I'm also
        learning React Native and some iOS development. The hope is to one day
        call myself a Full Stack Developer who happens to also build mobile
        applications.
      </Intro>
      <ButtonDiv>
        <CustomButton>Learn More About Me</CustomButton>
        <SecondaryButton>See My Work</SecondaryButton>
      </ButtonDiv>
    </Wrapper>
  )
}
