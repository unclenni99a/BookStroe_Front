import React, {useState} from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap' 
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";

function Header({ history }) {
    const [loggedIn, setloggedIn] = useState(false)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={ () => {history.push('/home')}} >BookStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            { loggedIn ===true?
                            <Nav>
                                <Nav.Link>Cart</Nav.Link>
                                <Nav.Link onClick={ () => {history.push('/home'); console.log(history); setloggedIn(false)}}>Log Out</Nav.Link>
                            </Nav>
                                :<Nav.Link onClick={ () => {history.push('/login'); console.log(history);; setloggedIn(true)}} >Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default withRouter(Header)