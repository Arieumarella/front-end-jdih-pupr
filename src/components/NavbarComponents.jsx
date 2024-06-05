import {Navbar, Container, Nav} from 'react-bootstrap';
import {navLinks} from '../data/index';
import { NavLink } from 'react-router-dom';

const NavbarComponents = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">My Aapaa</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link) => {
                return <div className='nav-link' key={link.id}>
                    <NavLink to={link.path}>{link.text}</NavLink>
                </div>
            })}
          </Nav>
          <div>
                <button>Join With Us</button>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponents