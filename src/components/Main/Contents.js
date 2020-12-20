import React from 'react';
import styled from "styled-components";
import {pxToRem, Topaz} from "../../lib/Styled";

function Contents(props) {

    const {
        type,
        subject,
        title,
        description,
        contentsImg
    } = props;

  return (
      <Container>
          { type === 'right' && <ImageArea><img src={contentsImg} alt=""/></ImageArea>}
          <TextArea type={type}>
              <h3>{subject}</h3>
              <h2>{title}</h2>
              <p>{description}</p>
          </TextArea>
          { type === 'left' && <ImageArea><img src={contentsImg} alt=""/></ImageArea>}
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: ${pxToRem(1140)};
  height: ${pxToRem(500)};
  margin: ${pxToRem(150)} auto 0;
  color: #000;
`;

const TextArea = styled.div`
  width: ${pxToRem(340)};
  text-align: left;
  word-break: keep-all;
  ${props => {
      if(props.type === 'left') {
          return `margin-right: ${pxToRem(40)}`
      } else {
          return `margin-left: ${pxToRem(40)}`
      }
  }};
   
  h3{
    font-size: 18px;
    font-weight: 900;
    color: ${Topaz};
  }
  h2{
    margin-top: ${pxToRem(14)};
    font-size: ${pxToRem(42)};
    line-height: 1.29;
  }
  p{
    margin-top: ${pxToRem(28)};
    font-size: ${pxToRem(20)};
    line-height: 1.7;
  }
`;

const ImageArea = styled.div`
  width: ${pxToRem(760)};
  height: 100%;
  background: #272c33;
`;

export default Contents;