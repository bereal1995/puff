import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import Routes from "./Routes";
import Spinner from "./components/Spinner";
import {GlobalStyle} from "./lib/Styled";
import Header from "./components/Header";
import Footer from "./components/Footer";




function App() {

    const app = useSelector(state => state.app);

  return (
      <Container>

        <GlobalStyle/>
        <Header/>
        <Routes/>
        <Spinner isLoading={app.isLoading}/>
        <Footer/>
      </Container>
  )
}
const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
`;


export default App;