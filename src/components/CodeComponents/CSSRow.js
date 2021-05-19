import React from "react"
import { Row, Number, PinkText, YellowText } from "../../styles/CodeStyles"
import styled from "styled-components"

const IndentedPinkText = styled(PinkText)`
  margin-left: ${props => props.indent};
`

export const CSSRow = ({ number, property, indent, value }) => {
  return (
    <Row>
      <Number>{number}</Number>
      <IndentedPinkText indent={indent}>{property}</IndentedPinkText>:{" "}
      <YellowText>{value}</YellowText>;
    </Row>
  )
}
