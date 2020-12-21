import React from 'react';
import styled from "styled-components";
import FooterMenu from "./FooterMenu";
import LanguageMenu from "./LanguageMenu";
import {pxToRem} from "../../lib/Styled";
import {CommonCopy} from "../../CopyRight/Common/Common";

function Footer(props) {

    const {
    
    } = props;

  return (
      <Container>
          <FooterMenu service={CommonCopy.footer.service}
                      privacy={CommonCopy.footer.privacy}
                      help={CommonCopy.footer.help}
          />
          <LanguageMenu/>
      </Container>
  )
}
const Container = styled.div`
  display:flex;
  justify-content: center;
  position: relative;
  height: ${pxToRem(150)};
  padding-top: ${pxToRem(52)};
  background: #000;
`;


export default Footer;