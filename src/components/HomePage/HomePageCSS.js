import React from "react"
import {
  StyledComponent,
  CSSRow,
  Backtick,
  EmptyRow,
  StyledCustom,
} from "../CodeComponents"

export const HomePageCSS = () => {
  return (
    <>
      <>
        <StyledComponent number="10" component="Wrapper" element="div" />
        <CSSRow number="11" property="padding" indent="16px" value="24px" />
        <Backtick number="12" />
      </>
      <EmptyRow number="13" />
      <>
        <StyledComponent number="14" component="ImageDiv" element="div" />
        <CSSRow number="15" property="width" indent="16px" value="70%" />
        <Backtick number="16" />
      </>
      <EmptyRow number="17" />
      <>
        <StyledCustom
          number="18"
          component="CustomImage"
          element="GatsbyImage"
        />
        <CSSRow number="19" property="width" indent="16px" value="100%" />
        <CSSRow
          number="20"
          property="box-shadow"
          indent="16px"
          value="5px 5px 1px var(--second-color), -5px -5px 1px var(--third-color)"
        />
        <Backtick number="21" />
      </>
      <EmptyRow number="22" />
      <>
        <StyledComponent number="23" component="MainHeading" element="h1" />
        <CSSRow
          number="24"
          property="color"
          indent="16px"
          value="var(--fifth-color)"
        />
        <CSSRow number="25" property="font-size" indent="16px" value="4rem" />
        <CSSRow number="26" property="margin-top" indent="16px" value="24px" />
        <CSSRow
          number="27"
          property="margin-bottom"
          indent="16px"
          value="12px"
        />
        <Backtick number="28" />
      </>
      <EmptyRow number="29" />
      <>
        <StyledComponent number="30" component="Intro" element="p" />
        <CSSRow number="31" property="margin" indent="16px" value="0" />
        <CSSRow number="32" property="padding" indent="16px" value="0" />
        <CSSRow
          number="33"
          property="color"
          indent="16px"
          value="var(--primary-text)"
        />
        <CSSRow number="34" property="font-size" indent="16px" value="2rem" />
        <CSSRow
          number="35"
          property="margin-bottom"
          indent="16px"
          value="24px"
        />
        <Backtick number="36" />
      </>
      <EmptyRow number="37" />
      <>
        <StyledComponent number="38" component="SpecialIntro" element="span" />
        <CSSRow
          number="39"
          property="color"
          indent="16px"
          value="var(--first-color)"
        />
        <CSSRow number="40" property="font-size" indent="16px" value="2.5rem" />
        <Backtick number="41" />
      </>
      <EmptyRow number="42" />
      <>
        <StyledComponent number="43" component="ReactIcon" element="span" />
        <CSSRow number="44" property="color" indent="16px" value="#5dd3f3" />
        <CSSRow number="45" property="margin-right" indent="16px" value="6px" />
        <Backtick number="46" />
      </>
      <EmptyRow number="47" />
      <>
        <StyledComponent number="48" component="ButtonDiv" element="div" />
        <CSSRow
          number="49"
          property="margin-bottom"
          indent="16px"
          value="56px"
        />
        <Backtick number="50" />
      </>
      <EmptyRow number="51" />
      <>
        <StyledComponent
          number="52"
          component="CustomButton"
          element="button"
        />
        <CSSRow number="53" property="cursor" indent="16px" value="pointer" />
        <CSSRow number="54" property="padding" indent="16px" value="16px 4px" />
        <Backtick number="50" />
      </>
    </>
  )
}
