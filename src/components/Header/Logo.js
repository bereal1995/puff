import React from 'react';
import styled from "styled-components";

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
  h1{
    color: #fff;
    font-family: NotoSansCJKkr;
    font-weight: 900;
    font-size: 24px;
  }
  cursor: pointer;
`;


export default Logo;