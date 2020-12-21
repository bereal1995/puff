import React from 'react';
import styled from "styled-components";
import Index from "../../components/Visual";
import TabMenu from "../../components/TabMenu";
import {useSelector} from "react-redux";
import downloadIcn from '../../images/icon/downloadIcn.png';
import visualImg from '../../images/Main/visual.jpg'
import {Cam} from "../../CopyRight/Cam/Copy";

function CamContainer(props) {

    const {

    } = props;

    const cam = useSelector(state => state.cam);


    return (
      <Container>
          <Index title={Cam.main.title}
                 description={Cam.main.description}
                 downloadImg={downloadIcn}
                 downloadCopy={Cam.main.downloadCopy}
                 downloadDescription={Cam.main.downloadDescription}
                 visualImg={visualImg}
          />
          <TabMenu/>
      </Container>
  )
}
const Container = styled.div`
  background-color: #151a1d;

`;


export default CamContainer;