import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsTwitter, BsTelegram } from 'react-icons/bs';
import "./Navbar.css"

function BasicNav() {
  return (
    <Navbar bg='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img src="./image/logo.png" alt="logo" height={40} className="tron-logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Developer" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Help</Nav.Link>
            <Nav.Link href="#link"><BsTwitter /></Nav.Link>
            <Nav.Link href="#link"><BsTelegram /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;