import React from 'react';
import styled from "styled-components";
import downloadIcn from '../../images/icon/downloadIcn.png';
import visualImg from '../../images/Main/visual.jpg'
import Visual from "../../components/Main/Visual";
import {useSelector} from "react-redux";
import TabMenu from "../../components/Main/TabMenu";
import Contents from "../../components/Main/Contents";

function CasterContainer(props) {

    const {

    } = props;

    const caster = useSelector(state => state.caster);

  return (
      <Container>
          <Visual title={caster.title}
                  description={caster.description}
                  downloadImg={downloadIcn}
                  downloadCopy={caster.downloadCopy}
                  downloadDescription={caster.downloadDescription}
                  visualImg={visualImg}
          />
          <TabMenu/>
          <Contents type={'left'}
                    subject={caster.comeTogether.subject}
                    title={caster.comeTogether.title}
                    description={caster.comeTogether.description}
                    contentImg={''}
          />
          <Contents type={'right'}
                    subject={caster.easyPeasy.subject}
                    title={caster.easyPeasy.title}
                    description={caster.easyPeasy.description}
                    contentImg={''}
          />
          <Contents type={'left'}
                    subject={caster.betterExperience.subject}
                    title={caster.betterExperience.title}
                    description={caster.betterExperience.description}
                    contentImg={''}
          />
      </Container>
  )
}
const Container = styled.div`
`;

export default CasterContainer;