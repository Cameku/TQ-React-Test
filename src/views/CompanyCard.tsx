import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Company } from '../models/Company';
import EmployeesModal from './EmployeesModal';
//import NotFound from '../routes/NotFound';



const CompanyCard: React.FC<Company> = () => {

  const companies = window.localStorage.getItem('companies');
  const companiesDetails = JSON.parse(companies!);

  return (
    <>

      {
        companiesDetails?.length > 0 ? (
          companiesDetails.map((company: {
            employees: any; name: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; address: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; url: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined;
          }, i: React.Key | null | undefined) => (

            <Container key={i}>
              <Row>
                <Col>
                  <Card className='mb-2' style={{ width: '30rem' }}>
                    <Card.Body>
                      <Card.Title>Company Details</Card.Title>
                      <Card.Text> Name: {company.name} </Card.Text>
                      <Card.Text> Address: {company.address} </Card.Text>
                      <Card.Text> Website: {company.url} </Card.Text>

                      <EmployeesModal name={company.employees.name} age={company.employees.age} />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          ))
        ) : (
          <p>
            {/* <NotFound /> */}
          </p>

        )
      }
    </>
  )
}

export default CompanyCard