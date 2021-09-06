import React, {useState, useEffect} from 'react'
import './login.css'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/login/loginActions'


export default function Login({history}){

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const loginReducer = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()
    console.log(loginReducer)
    useEffect(() => {
        console.log(loginReducer.loggedIn)
        if(loginReducer.loggedIn)
        {
            history.push('/home')
        }
        return () => {
        }
    }, [history,loginReducer.loggedIn])

    return (
        <div className="container">
            <Form className="mt-5">
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
                            <Form.Check type="checkbox" label="Check me out" />
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
