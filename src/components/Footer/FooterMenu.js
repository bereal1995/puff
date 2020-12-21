import React from 'react';
import styled from "styled-components";
import {pxToRem} from "../../lib/Styled";
import Logo from "../Header/Logo";

function FooterMenu(props) {

    const {
        service,
        privacy,
        help,
    } = props;

  return (
      <Container>
          <ul>
              <Logo/>
              <li>{service}</li>
              <span>|</span>
              <li>{privacy}</li>
              <span>|</span>
              <li>{help}</li>
          </ul>
          <Copyright>Copyright ©Starship Vending-machine. All rights reserved.</Copyright>
      </Container>
  )
}
const Container = styled.div`
  ul {
    display:flex;
    align-items: center;
    span{
      display:block;
      margin: 0 10px;
      color: #222;
    }
  }
  li{
    font-size: 14px;
    font-weight: 300;
    color: #ccc;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
`;

const Copyright = styled.div`
    margin-top: ${pxToRem(19)};
    font-size: 10px;
    font-weight: 300;
    color: #555;
    text-align: center;
`;


export default FooterMenu;