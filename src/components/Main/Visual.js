import React from 'react';
import styled from "styled-components";
import {pxToRem} from "../../lib/Styled";
import {ButtonTopaz} from "../../components/Button/Button.Styled";
import topIcnFacebook from '../../images/icon/topIcnFacebook.png'
import topIcnTwitch from '../../images/icon/topIcnTwitch.png'
import topIcnYoutube from '../../images/icon/topIcnYoutube.png'
import Carousel from "./Carousel";
import mainBgParttern1 from "../../images/Main/mainBgParttern1.png";
import mainBgParttern2 from "../../images/Main/mainBgParttern2.png";
import {DownloadButtonContainer} from "../Button/Button.Styled";


function Visual(props) {

    const {
        title,
        description,
        downloadImg,
        downloadCopy,
        downloadDescription,
        visualImg,
    } = props;

  return (
      <>
          <Container>
              <ContainerBg>
                  <VisualContainer>
                      <VisualText>
                          <h2>{title}</h2>
                          <p>{description}</p>
                          <DownloadContainer>
                              <DownloadButton><img src={downloadImg} alt="다운로드 버튼"/>{downloadCopy}</DownloadButton>
                              <span>{downloadDescription}</span>
                          </DownloadContainer>
                          <SnsContainer>
                              <h3>연동 플랫폼</h3>
                              <ul>
                                  <li><img src={topIcnYoutube} alt="유튜브 아이콘"/></li>
                                  <li><img src={topIcnTwitch} alt="트위치 아이콘"/></li>
                                  <li><img src={topIcnFacebook} alt="페이스북 아이콘"/></li>
                              </ul>
                          </SnsContainer>
                      </VisualText>
                      <VisualImage>
                          <img src={visualImg} alt="어플 실행화면"/>
                      </VisualImage>
                  </VisualContainer>
                  <Carousel/>
              </ContainerBg>
          </Container>
      </>
  )
}


const Container = styled.div`
  background-color: #151a1d;
  color: #fff;
`;

const ContainerBg = styled.div`
  margin: 0 ${pxToRem(60)};
  background-image: url(${mainBgParttern1}), url(${mainBgParttern2});
  background-repeat: no-repeat;
  background-position: left ${pxToRem(72)}, right top;
`;

const VisualContainer = styled.div`
  display:flex;
  justify-content: space-between;
  width: ${pxToRem(1140)};
  margin: 0 auto;
  padding-top: ${pxToRem(115)};
`;

const VisualText = styled.div`
  width: ${pxToRem(480)};
  h2{
    font-size: ${pxToRem(48)};
    line-height: 1.19;
    word-break: keep-all;
  }
  p{
    margin-top: ${pxToRem(35)};
    font-size: ${pxToRem(18)};
  }
`;

const DownloadContainer = styled(DownloadButtonContainer)`
  margin-top: ${pxToRem(96)};
`;

const DownloadButton = styled(ButtonTopaz)`
  width: ${pxToRem(246)};
  height: ${pxToRem(60)};  
`;

const VisualImage = styled.div`
    
`;

const SnsContainer = styled.div`
    margin-top: ${pxToRem(30)};
    font-size: 16px;
    h3 {
      font-weight: 300;
    }
    ul {
      display:flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: ${pxToRem(30)};
    }
    li {
      margin-right: ${pxToRem(36)};
      cursor:pointer;
      &:hover, &:active {
        opacity: .6;
      }
    }
`;


export default Visual;