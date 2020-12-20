import React from 'react';
import styled from "styled-components";
import {ColorBox} from "../../lib/Styled";
import cn from "classnames";
import {withRouter} from "react-router-dom";
import {navigate} from "../../lib/History";

function Carousel(props) {

    const {
        location,
    } = props;

  return (
      <Container>
        <ul>
            <li className={cn({isActive: location.pathname === '/'})}
                onClick={() => navigate('/')}
            ><Item caster/></li>
            <li className={cn({isActive: location.pathname === '/play'})}
                onClick={() => navigate('/play')}
            ><Item play/></li>
            <li className={cn({isActive: location.pathname === '/cam'})}
                onClick={() => navigate('/cam')}
            ><Item/></li>
        </ul>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  justify-content: center;
  padding: 40px 0 30px;
  z-index: 1;
  ul{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 55px;
    height: 24px;
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