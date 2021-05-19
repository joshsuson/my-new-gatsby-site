import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaReact } from "react-icons/fa"
import { BiCodeAlt } from "react-icons/bi"
import { RiSettings3Fill } from "react-icons/ri"
import { HiOutlineDocumentText } from "react-icons/hi"

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

const TertiaryButton = styled.button`
  cursor: pointer;
  margin-left: 24px;
  padding: 16px 8px 16px 8px;
  border: none;
  font-family: "Fira Code", monospace;
  text-transform: uppercase;
  font-size: 2rem;
  color: var(--second-color);
  background: linear-gradient(currentColor 0 0) var(--p, 100%) 0,
    linear-gradient(currentColor 0 0) 0 var(--d, 0),
    linear-gradient(currentColor 0 0) var(--d, 0) 100%,
    linear-gradient(currentColor 0 0) 100% var(--p, 100%);
  background-size: var(--d, 0) 3px, 3px var(--d, 0);
  background-repeat: no-repeat;
  transition: 0.5s, background-position 0s 0.5s;

  &:hover {
    --d: 100%;
    --p: 0%;
  }
`

const Comment = styled.p`
  color: var(--secondary-text);
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  span {
    margin-top: 8px;
    margin-left: 24px;
    display: block;
  }
`

export const FormattedHomePage = () => {
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
        <CustomImage image={image} alt="Josh sitting with laptop" />
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
        <CustomButton onClick={() => navigate("/about")}>
          Learn More About Me
        </CustomButton>
        <SecondaryButton>See My Work</SecondaryButton>
        <TertiaryButton>Read My Blog</TertiaryButton>
      </ButtonDiv>
      <Comment>
        {`/*---------------BEGIN COMMENT`}
        <br /> You're probably looking at my site and wondering "What can be
        clicked on?". I totally get it. The site is clever, but can be a little
        confusing. So like any good developer, I've left this comment to clear
        up any confusion.
        <br />
        <span>
          1. The folders and files are really just in interesting way to display
          the navigation. Click on the page you want to see and it will take you
          there. All the rest is just decoration to build out the experience
        </span>
        <span>
          2. If you'll notice there are three buttons in the top right. They do
          interesting things. The click them and see. Or if you want read the
          rest of this comment and I'll explain.
        </span>
        <span>
          3. If you click the <BiCodeAlt size="2rem" /> button it will show you
          what the code for the page looks like.
        </span>
        <span>
          4. If you click the <HiOutlineDocumentText size="2rem" /> button it
          will take you back to the formatted web page.
        </span>
        <span>
          5. If you click the <RiSettings3Fill size="2rem" /> button it will
          open up a prompt that will allow you to choose a theme for the site.
        </span>
        {`END COMMENT------------------*/`}
      </Comment>
    </Wrapper>
  )
}
