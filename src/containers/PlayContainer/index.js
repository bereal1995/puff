import React from 'react';
import styled from "styled-components";
import Visual from "../../components/Main/Visual";
import TabMenu from "../../components/Main/TabMenu";
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
          <Visual title={Play.main.title}
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