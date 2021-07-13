
import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Container className='footer-container py-3 px-3'>
        <h4 className='footer-title'>We are here to help you manage your money today and tomorrow</h4>
        <p>Ark Bank<i class="fas fa-university"></i></p>
        <p>Ark Bank Corporation. All rights reserved.</p>
        <p className='footer-title'>Other Products &amp; Services: <Link to='/'>Online Banking</Link> <Link to='/'>Mobile Banking</Link> 
        <Link to='/'>Student Center</Link>  <Link to='/'>Deposit and Prepaid Account Agreements</Link></p>
        </Container>
    )
}

export default Footer