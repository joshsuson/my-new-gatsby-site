import React from "react"
import { Row, Number } from "../../styles/CodeStyles"

export const EmptyRow = ({ number }) => {
  return (
    <Row>
      <Number>{number}</Number>
    </Row>
  )
}
