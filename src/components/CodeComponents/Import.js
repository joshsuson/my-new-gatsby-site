import React from "react"
import {
  PinkText,
  Number,
  GreenText,
  RedText,
  Row,
  YellowText,
} from "../../styles/CodeStyles"

export const Import = ({ number, component, source, brackets }) => {
  return (
    <Row>
      <Number>{number}</Number>
      <PinkText>import</PinkText> {brackets && <YellowText>{`{ `}</YellowText>}
      <GreenText>{component}</GreenText>
      {brackets && (
        <YellowText>{` }`}</YellowText>
      )} <PinkText>from</PinkText> <RedText>{source}</RedText>
    </Row>
  )
}
