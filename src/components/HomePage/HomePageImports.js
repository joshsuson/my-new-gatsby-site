import React from "react"
import { Import } from "../CodeComponents"

export const HomePageImports = () => {
  return (
    <>
      <Import number="1" component="React" source={`"react"`} />
      <Import number="2" component="styled" source={`"styled-components"`} />
      <Import
        number="3"
        component="useStaticQuery, graphql, navigate"
        brackets
        source={`"gatsby"`}
      />
      <Import
        number="4"
        component="GatsbyImage, getImage"
        brackets
        source={`"gatsby-plugin-image"`}
      />
      <Import
        number="5"
        component="FaReact"
        brackets
        source={`"react-icons/fa"`}
      />
      <Import
        number="6"
        component="BiCodeAlt"
        brackets
        source={`"react-icons/bi"`}
      />
      <Import
        number="7"
        component="RiSettings3Fill"
        brackets
        source={`"react-icons/ri"`}
      />
      <Import
        number="8"
        component="HiOutlineDocumentText"
        brackets
        source={`"react-icons/hi"`}
      />
    </>
  )
}
