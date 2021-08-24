import React, {useState} from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap' 
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Header() {
    const [loggedIn, setloggedIn] = useState(false)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BookStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            { loggedIn ===true?
                            <Nav>
                                <Nav.Link>Cart</Nav.Link>
                                <Nav.Link onClick={ () => {setloggedIn(false)}}>Log Out</Nav.Link>
                            </Nav>
                                : <Nav.Link onClick={ () => {setloggedIn(true)}} href="#deets">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Header