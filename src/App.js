import React from 'react';
import Container from './components/Container/Container.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import ContentWrapper from './components/ContentWrapper/ContentWrapper.jsx';
import Header from './components/Header/Header.jsx';
const App = ()=>{
  return (
       <Container>
          <Sidebar/>
          <ContentWrapper>
            <Header/>
          </ContentWrapper>
       </Container>
  );
}

export default App;
