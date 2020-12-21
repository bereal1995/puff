import React from 'react';
import styled from "styled-components";
import {pxToRem} from "../../lib/Styled";

function Logo(props) {

    const {

    } = props;

  return (
      <Container>
          <h1>PUFF</h1>
      </Container>
  )
}
const Container = styled.div`
  margin-right: ${pxToRem(40)};
  h1{
    color: #fff;
    font-family: NotoSansCJKkr;
    font-weight: 900;
    font-size: 14px;
  }
`;


export default Logo;