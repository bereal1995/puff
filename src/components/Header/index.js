import React from 'react';
import styled from "styled-components";
import Gnb from "./Gnb";
import Logo from "./Logo";
import {navigate} from "../../lib/History";
import {pxToRem} from "../../lib/Styled";
import {CommonCopy} from "../../CopyRight/Common/Common";

function Header(props) {

    const {

    } = props;

  return (
      <Container>
          <Logo onClick={() => navigate('/')}/>
          <Gnb product={CommonCopy.header.product}
               premium={CommonCopy.header.premium}
               more={CommonCopy.header.more}
               login={CommonCopy.header.login}
          />
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  height: 80px;
  padding: 0 150px ${pxToRem(20)};
  background: #151a1d;
`;


export default Header;