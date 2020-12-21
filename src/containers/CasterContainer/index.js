import React from 'react';
import styled from "styled-components";
import downloadIcn from '../../images/icon/downloadIcn.png';
import visualImg from '../../images/Main/visual.jpg'
import Index from "../../components/Visual";
import TabMenu from "../../components/TabMenu";
import Contents from "../../components/Main/Contents";
import {Caster} from "../../CopyRight/Caster/Copy";
import Download from "../../components/Download";

function CasterContainer(props) {

    const {

    } = props;

  return (
      <Container>
          <Index title={Caster.main.title}
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
          <Download downloadImg={downloadIcn}
                    downloadCopy={Caster.main.downloadCopy}
                    downloadDescription={Caster.main.downloadDescription}
                    downloadMent={Caster.Download.copy}
                    updateNoticeCopy={Caster.Download.updateNotice}
          />
      </Container>
  )
}
const Container = styled.div`
`;

export default CasterContainer;