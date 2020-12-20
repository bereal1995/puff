import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import Routes from "./Routes";
import Spinner from "./components/Spinner";
import HeaderContainer from "./containers/HeaderContainer";
import {GlobalStyle} from "./lib/Styled";




function App() {

    const app = useSelector(state => state.app);

  return (
      <Container>

        <GlobalStyle/>
        <HeaderContainer/>
        <Routes/>
        <Spinner isLoading={app.isLoading}/>
      </Container>
  )
}
const Container = styled.div`

`;


export default App;