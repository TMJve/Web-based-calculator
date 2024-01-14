import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Support from './Support';

const Container = styled.div`
background: #323232;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
min-height:100vh;

`;


function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
