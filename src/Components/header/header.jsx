import React, {useState, useEffect} from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap' 
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/login/loginActions'
import "./header.scss";
import { getCookie } from 'react-use-cookie';
import { loginWithToken } from '../../Redux/login/loginActions';

function Header({ history }) {
    const [loggedIn, setloggedIn] = useState(false)
    const loginReducer = useSelector(state => state.loginReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        if(getCookie('token') !== '' && getCookie('token') !== 'undefined')
        {
            dispatch(loginWithToken(getCookie('token')));
        }
    }, [])

    useEffect(() => {
        setloggedIn(loginReducer.loggedIn)
        return () => {
        }
    }, [history,loginReducer.loggedIn])
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand id="BookStore" onClick={ () => {history.push('/home')}} >BookStore</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            { loggedIn ===true?
                            <Nav>
                                <Nav.Link onClick={ () => {history.push('/sellBook')}}>Sell your book</Nav.Link>
                                <Nav.Link>Cart</Nav.Link>
                                <Nav.Link onClick={ () => {dispatch(logout());}}>Log Out</Nav.Link>
                            </Nav>
                                :
                            <Nav>
                                <Nav.Link onClick={ () => {history.push('/login');}} >Login</Nav.Link>
                                <Nav.Link onClick={ () => {history.push('/signup');}} >Sign Up </Nav.Link>
                            </Nav>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default withRouter(Header)