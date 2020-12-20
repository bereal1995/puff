import React from 'react';
import styled from "styled-components";
import {withRouter} from "react-router-dom";

function HeaderContainer(props) {

    const {
        location,
    } = props;

    const pathname = location.pathname;

  return (
      <Container>

      </Container>
  )
}
const Container = styled.div`

`;


export default withRouter(HeaderContainer);