import React from 'react';
import styled from "styled-components";
import {GreenYellow, pxToRem} from "../../lib/Styled";

function Gnb(props) {

    const {
    } = props;

  return (
      <Container>
          <GnbMenu>
              <li>제품<Arrow/></li>
              <li>프리미엄</li>
              <li>더 알아보기</li>
          </GnbMenu>
          <Button>로그인</Button>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  align-items: center;
`;

const GnbMenu = styled.div`
  display:flex;
  justify-content: center;
  li {
    position: relative;
    margin-left: ${pxToRem(50)};
    font-size: ${pxToRem(14)};
    opacity: .6;
    cursor: pointer;
  }
  li:hover, li:active {
    opacity: 1;
  }
`;

const Button = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: ${pxToRem(90)};
    height: ${pxToRem(40)};
    margin-left: ${pxToRem(120)};
    background: ${GreenYellow};
    color: #000;
    border-radius: 6px;
    cursor: pointer;
    &:hover, &:active {
      opacity: .4;
    }
`;

const Arrow = styled.span`
    content:"";
    display: inline-block;
    position: relative;
    top: -2px;
    width:10px;
    height:10px;
    margin-left: 10px;
    border-top:2px solid #fff;
    border-right:2px solid #fff;
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
`;

export default Gnb;