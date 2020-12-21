import React from 'react';
import styled from "styled-components";
import {ColorBox, pxToRem} from "../../lib/Styled";
import cn from 'classnames'
import {withRouter} from "react-router-dom";
import {navigate} from "../../lib/History";

function TabMenu(props) {

    const {
        location,
    } = props;

  return (
      <Container>
          <ul>
              <li className={cn({isActive: location.pathname === '/'})}
                  onClick={() => navigate('/')}
              >
                  <Box caster/>
                  <p>퍼프 캐스터</p>
              </li>
              <li className={cn({isActive: location.pathname === '/play'})}
                  onClick={() => navigate('/play')}
              >
                  <Box play/>
                  <p>퍼프 채팅창</p>
              </li>
              <li className={cn({isActive: location.pathname === '/cam'})}
                  onClick={() => navigate('/cam')}
              >
                  <Box/>
                  <p>퍼프 캠</p>
              </li>
          </ul>
      </Container>
  )
}
const Container = styled.div`
  height: ${pxToRem(80)};
  color: #fff;
  background: #1b2227;
  ul{
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  li {
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 100%;
    cursor: pointer;
    opacity: .4;
    &:hover, &:active, &.isActive {
      opacity: 1;
    }
    font-size: 15px;
    p {
     z-index: 1;
    }
  }
  li.isActive:before{
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transform: skew(-20deg);
    background: #151a1d;
  }
  
`;
const Box = styled(ColorBox)`
    width: 22px;
    height: 22px;
    margin-right: 10px;
    z-index: 1;
`;


export default withRouter(TabMenu);