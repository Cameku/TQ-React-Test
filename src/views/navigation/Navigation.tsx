import React from 'react';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar bg='light' expand='lg'>
            <LinkContainer to='/'>
              <Navbar.Brand>TerraQuest Solutions</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Nav className='ml-auto'>
              <Nav.Link as={Link} to={"/companies"}>Companies</Nav.Link>
              <Nav.Link as={Link} to={"/companycard"}>Company card</Nav.Link>
              <Nav.Link as={Link} to={"/createcompany"}>Create Company</Nav.Link>
              <Nav.Link as={Link} to={"/employeesmodal"}>Employees Modal</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
