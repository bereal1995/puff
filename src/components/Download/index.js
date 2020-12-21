import React, {useState} from 'react';
import styled from "styled-components";
import downloadBgParttern1 from '../../images/Download/downloadBgParttern1.png'
import downloadBgParttern2 from '../../images/Download/downloadBgParttern2.png'
import toggleClose from '../../images/Download/toggleClose.png'
import {ButtonTopaz, DownloadButtonContainer} from "../Button/Button.Styled";
import {pxToRem} from "../../lib/Styled";
import {Caster} from "../../CopyRight/Caster/Copy";

function Download(props) {

    const {
        downloadImg,
        downloadCopy,
        downloadDescription,
        downloadMent,
        updateNoticeCopy,
    } = props;

    const [updateNotice, setUpdateNotice] = useState(true);
    const offUpdateNotice = () => setUpdateNotice(false);

  return (
      <Container>
          <BgContainer>
              <ContentsContainer>
                  <DownloadContainer>
                      <DownloadButton><img src={downloadImg} alt="다운로드 버튼"/>{downloadCopy}</DownloadButton>
                      <span>{downloadDescription}</span>
                  </DownloadContainer>
                  <DownloadCopy>
                      {downloadMent}
                  </DownloadCopy>
                  {
                      updateNotice &&
                      <UpdateNotice>
                          {updateNoticeCopy}
                          <CloseButton onClick={offUpdateNotice}><img src={toggleClose} alt=""/></CloseButton>
                      </UpdateNotice>
                  }
              </ContentsContainer>
          </BgContainer>
      </Container>
  )
}
const Container = styled.div`
  height: ${pxToRem(390)};
  margin-top: ${pxToRem(150)};
  background: #1b2227;
`;

const BgContainer = styled.div`
  height: 100%;
  margin: 0 ${pxToRem(60)};
  background-image: url(${downloadBgParttern1}),url(${downloadBgParttern2});
  background-repeat: no-repeat;
  background-position: left ${pxToRem(30)}, right ${pxToRem(30)};
`;

const ContentsContainer = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 100%;
`;

const DownloadContainer = styled(DownloadButtonContainer)`
    margin-top: ${pxToRem(110)};
`;

const DownloadButton = styled(ButtonTopaz)`
    width: ${pxToRem(246)};
    height: ${pxToRem(60)};
    font-weight: bold;
`;

const DownloadCopy = styled.div`
    margin-top: ${pxToRem(62)};
    font-size: ${pxToRem(24)};
    color: #fff;
`;

const UpdateNotice = styled.div`
    position: absolute;
    bottom: 0;
    display:flex;
    align-items: center;
    justify-content: center;
    width: ${pxToRem(1060)};
    height: ${pxToRem(48)};
    font-size: 12px;
    background: #00befd;
    border-radius: 4px 4px 0 0;
`;

const CloseButton = styled.div`
    position: absolute;
    right: 12px;
`;

export default Download;