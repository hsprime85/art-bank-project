import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import axios from 'axios'

const LoginScreen = ({ history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const validateForm = () => {
    //     return email.length > 0 && password.length > 0;
    // }
    const submitHandler = (e) => {
        e.preventDefault()
    
            axios.post('http://localhost:3001/api/users/:id', {
                email,
                password,
            }).then(res => console.log(res))
            .catch(err=>console.log(err))
            
            history.push(`/users`)
    
    }
    

    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        ></Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' onClick={submitHandler}>SIGN IN</Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer?
                    <Link to='/register' >
                    REGISTER</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}
export default LoginScreen