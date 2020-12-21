import React from 'react';
import styled from "styled-components";
import Index from "../../components/Visual";
import TabMenu from "../../components/TabMenu";
import {useSelector} from "react-redux";
import downloadIcn from '../../images/icon/downloadIcn.png';
import visualImg from '../../images/Main/visual.jpg'
import {Play} from "../../CopyRight/Play/Copy";

function PlayContainer(props) {

    const {

    } = props;

    const play = useSelector(state => state.play);

  return (
      <Container>
          <Index title={Play.main.title}
                 description={Play.main.description}
                 downloadImg={downloadIcn}
                 downloadCopy={Play.main.downloadCopy}
                 downloadDescription={Play.main.downloadDescription}
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