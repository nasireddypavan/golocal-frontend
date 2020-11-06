
import { Nav,Navbar, Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
//import image1 from '../images/Logo.jpeg'
import './Newbar.css'


function Newbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className= "navbar" sticky= "top">
        <Navbar.Brand className= "logostyle" href="#home">GO LOCAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="Combined" className="nav-link">Products</NavLink>
              <NavLink to="signup" className="nav-link">Subscription</NavLink>
          </Nav>
              <NavLink to="login" className="nav-link"><Button variant="primary" >Log In</Button></NavLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Newbar;

