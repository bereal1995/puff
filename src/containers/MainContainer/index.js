import React from 'react';
import styled from "styled-components";
import mainBgParttern1 from '../../images/Main/mainBgParttern1.png';
import mainBgParttern2 from '../../images/Main/mainBgParttern2.png';
import {pxToRem} from "../../lib/Styled";
import downloadIcn from '../../images/icon/downloadIcn.png';
import visualImg from '../../images/Main/visual.jpg'
import Visual from "../../components/Main/Visual";
import {useSelector} from "react-redux";
import TabMenu from "../../components/Main/TabMenu";

function MainContainer(props) {

    const {

    } = props;

    const main = useSelector(state => state.main);

  return (
      <Container>
          <VisualContainer>
              <Visual title={main.title}
                      description={main.description}
                      downloadImg={downloadIcn}
                      downloadCopy={main.downloadCopy}
                      downloadDescription={main.downloadDescription}
                      visualImg={visualImg}
              />
          </VisualContainer>
          <TabMenu/>
      </Container>
  )
}
const Container = styled.div`
  background-color: #151a1d;
`;

const VisualContainer = styled.div`
  margin: 0 ${pxToRem(60)};
  background-image: url(${mainBgParttern1}), url(${mainBgParttern2});
  background-repeat: no-repeat;
  background-position: left ${pxToRem(72)}, right top;
`;


export default MainContainer;