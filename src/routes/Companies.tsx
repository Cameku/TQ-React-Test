import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Company } from '../models/Company';
import CompanyCard from '../views/CompanyCard'



const Companies: React.FC = () => {

  const companies = window.localStorage.getItem('companies');
  const companiesDetails: Company[] = JSON.parse(companies!);

  return (
    <div>


      <Container>
        <Row>
          <Col>
            <br />
            <h2>Welcome to the Companies page</h2>
          </Col>
        </Row>
      </Container>

      {
        companiesDetails?.length > 0 ? (
          companiesDetails.map((company) => (
            <Container>
              <br />
              <Row>
                <Col>
                  <CompanyCard name={company.name} address={company.address} url={company.url} employees={company.employees} />
                </Col>
              </Row>
            </Container>
          ))
        ) : (
          <p></p>
        )
      }

      <Container>
        <Row>
          <Col>
            <br />
            <Link to="/CreateCompany" className='btn btn-primary'>Create Company</Link>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Companies