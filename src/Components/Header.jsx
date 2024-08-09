import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <>
     <Navbar>
        <Container>
          <Navbar.Brand href="#home">CRUD APP</Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header
