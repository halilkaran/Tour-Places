import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";

import "./Header.css";

function Header() {
  return (
    <>
      <Navbar   bg="dark" variant="dark" sticky="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#a">ABOUT US</Nav.Link>
            <Nav.Link href="#b">FOR YOU</Nav.Link>
            <Nav.Link href="#c">SERVICES</Nav.Link>
            <Nav.Link href="#d">BLOG</Nav.Link>
            <Nav.Link href="#e">VLOG</Nav.Link>
            <Nav.Link href="#f">CONTACT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
