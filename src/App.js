import React from 'react'
import Container from '@mui/material/Container'
import Design from './Components/Design'
import NavList from './Components/NavList'
import Banner from './Components/Banner'
import CardGrid from './Components/CardGrid'
import TextGrid from './Components/TextGrid'
import Footer from './Components/Footer'



function App() {

  return (
    <Container>
      <Design />
      <NavList />
      <Banner />
      <CardGrid />
      <TextGrid />
      <Footer />
    </Container>
  );
}

export default App;
