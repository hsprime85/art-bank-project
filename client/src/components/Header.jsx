import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
        <Navbar bg='info' variant='dark' expand='lg'>
          <Container>
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Navbar.Brand><strong>Ark BANK <i class="fas fa-university"></i></strong></Navbar.Brand>
            </LinkContainer>
            <LinkContainer to='/'>
                  <Nav.Link>
                   Checking / Savings
                  </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
                  <Nav.Link>
                   Credit Cards 
                  </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
                  <Nav.Link>
                   Home Loans 
                  </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
                  <Nav.Link>
                   Auto 
                  </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/'>
                  <Nav.Link>
                   Investing by Ark Bank 
                  </Nav.Link>
            </LinkContainer>
          </Nav>      
          </Container>
        </Navbar>
      </header>
    )
}

export default Header