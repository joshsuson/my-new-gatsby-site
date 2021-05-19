import React from "react"
import {
  Row,
  Number,
  PinkText,
  GreenText,
  PurpleText,
  RedText,
} from "../../styles/CodeStyles"

export const StyledComponent = ({ number, component, element }) => {
  return (
    <Row>
      <Number>{number}</Number>
      <PinkText>const</PinkText> <GreenText>{component}</GreenText>{" "}
      <PurpleText>{`=`}</PurpleText> <GreenText>styled</GreenText>.
      <PurpleText>{element}</PurpleText>
      <RedText>`</RedText>
    </Row>
  )
}
