import React from 'react'
import { Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { getArticls } from '../../JS/actions/articlAction'
import { logout } from '../../JS/actions/user'

const Navigation = () => {
  const dispatch = useDispatch();
  const history = useHistory()
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">NutriFA</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link href="#link">
      <Link to='/dashboard' >Home</Link>
      </Nav.Link>
      <Nav.Link href="#link">
      <Link to='/apropos' >A propos</Link>
      </Nav.Link>
      
    </Nav>
    
    <Form inline>
    <button onClick={() => { dispatch(logout()); history.push("/login") }}>logout</button>
    <button onClick={() => { dispatch(getArticls()); history.push("/listes") }}>Articl</button>
   <Link to='/profil'> <button >profil</button></Link>

   
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navigation
