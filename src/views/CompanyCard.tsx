import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Company } from '../models/Company';
import EmployeesModal from './EmployeesModal';
//import NotFound from '../routes/NotFound';


const CompanyCard: React.FC<Company> = ({ name, address, url, employees }: Company) => {

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card className='mb-2' style={{ width: '28rem' }}>
              <Card.Body>
                <Card.Title>Company Details</Card.Title>
                <Card.Text> Name: {name} </Card.Text>
                <Card.Text> Address: {address} </Card.Text>
                <Card.Text> Website: {url} </Card.Text>

                <EmployeesModal employees={employees} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CompanyCard