import React from 'react';
import styled from "styled-components";
import downloadIcn from '../../images/icon/downloadIcn.png';
import visualImg from '../../images/Main/visual.jpg'
import Visual from "../../components/Main/Visual";
import {useSelector} from "react-redux";
import TabMenu from "../../components/Main/TabMenu";
import Contents from "../../components/Main/Contents";
import {Caster} from "../../CopyRight/Caster/Copy";

function CasterContainer(props) {

    const {

    } = props;

  return (
      <Container>
          <Visual title={Caster.main.title}
                  description={Caster.main.description}
                  downloadImg={downloadIcn}
                  downloadCopy={Caster.main.downloadCopy}
                  downloadDescription={Caster.main.downloadDescription}
                  visualImg={visualImg}
          />
          <TabMenu/>
          <Contents type={'left'}
                    subject={Caster.comeTogether.subject}
                    title={Caster.comeTogether.title}
                    description={Caster.comeTogether.description}
                    contentImg={''}
          />
          <Contents type={'right'}
                    subject={Caster.easyPeasy.subject}
                    title={Caster.easyPeasy.title}
                    description={Caster.easyPeasy.description}
                    contentImg={''}
          />
          <Contents type={'left'}
                    subject={Caster.betterExperience.subject}
                    title={Caster.betterExperience.title}
                    description={Caster.betterExperience.description}
                    contentImg={''}
          />
      </Container>
  )
}
const Container = styled.div`
`;

export default CasterContainer;