import React from 'react';

import './App.css';
import Course from './components/Course/Course';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <div >
  <Container>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#course">Course</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            
          </Navbar>

    <Course></Course>

  </Container>
    </div>
  );
}

export default App;
