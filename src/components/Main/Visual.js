import React from 'react';
import styled from "styled-components";
import {pxToRem} from "../../lib/Styled";
import {ButtonTopaz} from "../../components/Button/Button.Styled";
import topIcnFacebook from '../../images/icon/topIcnFacebook.png'
import topIcnTwitch from '../../images/icon/topIcnTwitch.png'
import topIcnYoutube from '../../images/icon/topIcnYoutube.png'
import Carousel from "./Carousel";


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

          </Container>
          <Carousel/>
    </>
  )
}
const Container = styled.div`
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

const DownloadContainer = styled.div`
  margin-top: ${pxToRem(96)};
  span{
    display:block;
    color: #777;
    font-size: 14px;
    line-height: 1;
    margin-top: 10px;
  }
`;

const DownloadButton = styled(ButtonTopaz)`
  width: ${pxToRem(246)};
  height: ${pxToRem(60)};  
  img{
    margin-right: 8px;
  }
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