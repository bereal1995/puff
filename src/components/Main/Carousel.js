import React from 'react';
import styled from "styled-components";
import {ColorBox} from "../../lib/Styled";
import cn from "classnames";
import {withRouter} from "react-router-dom";

function Carousel(props) {

    const {
        location,
    } = props;

  return (
      <Container>
        <ul>
            <li className={cn({isActive: location.pathname === '/'})}><Item caster/></li>
            <li><Item play/></li>
            <li><Item/></li>
        </ul>
      </Container>
  )
}
const Container = styled.div`
  width: 55px;
  height: 24px;
  margin: 40px auto 30px;
  ul{
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    background: #000;
    border-radius: 12px;
  }
  li {
    opacity: .4;
    &:hover, &:active,&.isActive {
      opacity: 1;
    }
    cursor: pointer;
    padding: 4px;
  }
`;

const Item = styled(ColorBox)`
    border-radius: 50%;
    width: 8px;
    height: 8px;
`;


export default withRouter(Carousel);