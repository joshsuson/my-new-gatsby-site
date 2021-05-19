import React from "react"
import {
  Row,
  Number,
  PinkText,
  GreenText,
  PurpleText,
  RedText,
  YellowText,
} from "../../styles/CodeStyles"

export const StyledCustom = ({ number, component, element }) => {
  return (
    <Row>
      <Number>{number}</Number>
      <PinkText>const</PinkText> <GreenText>{component}</GreenText>{" "}
      <PurpleText>{`=`}</PurpleText> <GreenText>styled</GreenText>
      <YellowText>(</YellowText>
      <PurpleText>{element}</PurpleText>
      <YellowText>)</YellowText>
      <RedText>`</RedText>
    </Row>
  )
}
