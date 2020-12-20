import React from 'react';
import styled from "styled-components";
import Visual from "../../components/Main/Visual";
import TabMenu from "../../components/Main/TabMenu";
import {useSelector} from "react-redux";
import downloadIcn from '../../images/icon/downloadIcn.png';
import visualImg from '../../images/Main/visual.jpg'

function PlayContainer(props) {

    const {

    } = props;

    const play = useSelector(state => state.play);

  return (
      <Container>
          <Visual title={play.title}
                  description={play.description}
                  downloadImg={downloadIcn}
                  downloadCopy={play.downloadCopy}
                  downloadDescription={play.downloadDescription}
                  visualImg={visualImg}
          />
          <TabMenu/>
      </Container>
  )
}
const Container = styled.div`
  background-color: #151a1d;

`;


export default PlayContainer;