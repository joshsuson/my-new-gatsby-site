import styled from "styled-components"

const Text = styled.span``

export const PinkText = styled(Text)`
  color: var(--fifth-color);
  font-weight: 700;
`
export const PurpleText = styled(Text)`
  color: var(--second-color);
`
export const GreenText = styled(Text)`
  color: var(--third-color);
`
export const YellowText = styled(Text)`
  color: var(--fourth-color);
`
export const RedText = styled(Text)`
  color: var(--first-color);
`

export const Number = styled.span`
  color: var(--secondary-text);
  margin-right: 32px;
`

export const Row = styled.div`
  color: var(--primary-text);
`
