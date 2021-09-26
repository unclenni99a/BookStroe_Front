import React, {useState, useEffect} from 'react'
import './login.scss'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Alert, Form, Button, Col, Row, Fade } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/login/loginActions'
import { setCookie } from 'react-use-cookie';


export default function Login({history}){

    const [open, setOpen] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const loginReducer = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        if(loginReducer.loggedIn === true)
        {
            setOpen(false)
            history.push('/home')
        }
        if(loginReducer.loggedIn === false)
        {
            setOpen(true)
            setCookie('token',undefined)
        }
        return () => {
        }
    }, [history,loginReducer.loggedIn])

    return (
        <div className="container">
                    <Fade in={open}  >
                        <Row className="justify-content-md-center">
                            <Col lg="6">
                                <Alert variant="danger" className="alerter">
                                    User Name or Password are incorrect.
                                </Alert>
                            </Col>
                        </Row>
                    </Fade>
            <Form className="mt-1">
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="email" placeholder="User Name" value={userName} onChange={(e) => {setUserName(e.target.value)}}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button onClick={() => {
                            dispatch(login(userName,password))
                        }} variant="primary" type="button">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
