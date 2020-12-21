import React from 'react';
import styled from "styled-components";
import {ArrowCss, pxToRem} from "../../lib/Styled";

function LanguageMenu(props) {

    const {

    } = props;

  return (
      <Container>
          <div>한국어<Arrow/></div>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  align-items: center;
  position: absolute;
  right: ${pxToRem(150)};
  width: ${pxToRem(93)};
  height: ${pxToRem(32)};
  padding: 0 14px;
  font-size: 12px;
  background: #111;
  color: #fff;
  cursor: pointer;
`;

const Arrow = styled(ArrowCss)`
  margin-left: ${pxToRem(25)};
  width: 8px;
  height: 8px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
`;

export default LanguageMenu;