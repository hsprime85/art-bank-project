import React, { useState, useEffect} from 'react'
import { Container, Row, Col, ListGroup, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import FormContainer from './FormContainer'
import axios from 'axios'

const Title = ({ history }) => {
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
        <div className='title-container'>       
        <Container fluid className='py-3 title'>
            <Row>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item style={{ height: '30vh'}} className='title-cards-login py-3'>
                                <h3>Welcome</h3>
                                <Form className='title-cards-login-form' onSubmit={submitHandler} >
                                    <Form.Group controlId='email' className='py-1 '>
                                        <Form.Control 
                                            type="text"
                                            type='email' 
                                            placeholder='Enter Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='password'  className='py-1'>
                                        <Form.Control 
                                            type='password' 
                                            placeholder='Enter Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            ></Form.Control>
                                    </Form.Group>

                                    <Button className='title-submit-button' type='submit' variant='primary'>SIGN IN</Button>
                                </Form>

                                <Row className='py-3'>
                                    <Col>
                                        New Customer? <Link to='/register' >REGISTER</Link>
                                    </Col>
                                </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </Container>
        </div>
    )
}
 
export default Title 