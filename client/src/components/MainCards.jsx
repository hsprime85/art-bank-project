import React from 'react'
import { Container, Row, Col, ListGroup, Form, Button} from 'react-bootstrap'

const MainCards = () => {
    
    return (
        <Container fluid className='py-3 title'>
            <Row>
                <Col md={4} >
                    <ListGroup>
                        <ListGroup.Item>
                            <Container className='cards-container'>
                                <div className='name-cards'>
                                    <h2>Ark Freedom <br/>Flex</h2>
                                    <h1><i class="far fa-credit-card"></i></h1>
                                </div>
                                <h4>Earn a $200 bonus + 5% grocery store after</h4>
                                <p>Plus, 5% cash back on quarterly bonus categories and 3% cash back on dining &amp; drugstores - all for no annual fee.</p>
                                <Button className='learn-more'> Learn More</Button>
                            </Container>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4} >
                    <ListGroup>
                        <ListGroup.Item>
                            <Container className='cards-container'>
                                <div className='name-cards'>
                                    <h2>Ark Freedom <br/>Unlimited</h2>
                                    <h1><i class="far fa-credit-card"></i></h1>
                                </div>
                                <h4>Earn a $200 bonus + 5% grocery store after</h4>
                                <p>Also, earn unlimited 3% on dining and drugstores and 1.5% on all other purchases - <strong>all for no annual fee.</strong></p>
                                <Button className='learn-more'> Learn More</Button>
                            </Container>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4} >
                    <ListGroup>
                        <ListGroup.Item>
                            <Container className='cards-container'>
                                <div className='name-cards'>
                                    <h2>Find a <br/>Credit card</h2>
                                    <h1><i class="far fa-credit-card"></i></h1>
                                </div>
                                <h4>We have the right card <br/> for you</h4>
                                <p>For new Ark checking customers when you open an Ark Secure Banking account with qualifying activities.</p>
                                <Button className='learn-more'>Open an account</Button>
                            </Container>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                
            </Row>
            <Row>
                <Container className='checking-customers'>
                    <h1>For new Ark Checking customers</h1>
                    <h4>Get $100 when you open a Ark College Checking account with qualifying acitivities.</h4>
                    <Button className='continue'>Continue</Button>
                </Container>
            </Row>
            <Row>
                <Container >
                <h4 className='follow-us'>Follow us: <i class="fab fa-facebook"></i>   <i class="fab fa-instagram"></i>    <i class="fab fa-twitter"></i>  <i class="fab fa-youtube"></i>  <i class="fab fa-linkedin"></i></h4>
                </Container>
            </Row>
        </Container>
    )
}

export default MainCards