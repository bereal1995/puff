import React from 'react';
import styled from "styled-components";
import Visual from "../../components/Main/Visual";
import TabMenu from "../../components/Main/TabMenu";
import {useSelector} from "react-redux";
import downloadIcn from '../../images/icon/downloadIcn.png';
import visualImg from '../../images/Main/visual.jpg'

function CamContainer(props) {

    const {

    } = props;

    const cam = useSelector(state => state.cam);


    return (
      <Container>
          <Visual title={cam.title}
                  description={cam.description}
                  downloadImg={downloadIcn}
                  downloadCopy={cam.downloadCopy}
                  downloadDescription={cam.downloadDescription}
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