import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavBar() {
  return (
    <Nav variant="pills" className="justify-content-center py-2" >
      <Nav.Item className="px-5">
        <Nav.Link href="/">Slide Show</Nav.Link>
      </Nav.Item>
      <Nav.Item className="px-5">
        <Nav.Link href='/list'>List</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavBar;