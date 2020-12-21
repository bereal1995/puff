import React from 'react';
import styled from "styled-components";
import {ArrowCss, GreenYellow, pxToRem} from "../../lib/Styled";

function Gnb(props) {

    const {
        product,
        premium,
        more,
        login,
    } = props;

  return (
      <Container>
          <GnbMenu>
              <li>{product}<Arrow/></li>
              <li>{premium}</li>
              <li>{more}</li>
          </GnbMenu>
          <Button>{login}</Button>
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
    color:#fff;
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

const Arrow = styled(ArrowCss)`
    
`;

export default Gnb;