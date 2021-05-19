import React from "react"
import { Row, Number, RedText } from "../../styles/CodeStyles"

export const Backtick = ({ number }) => {
  return (
    <Row>
      <Number>{number}</Number>
      <RedText>`</RedText>
    </Row>
  )
}
