import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Navber = () => {
    return (

     <Navbar bg="light" expand="white">
  
    <Navbar.Brand className="me-5 " href="#home">mercedes benz</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link className="ms-5 f-w" href="/home ">Home</Nav.Link>
        <Nav.Link className="ms-5" href="/AddEvents">AddEvent</Nav.Link>
        <NavDropdown className="ms-5" title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>

</Navbar>
    
     
    );
};

export default Navber;