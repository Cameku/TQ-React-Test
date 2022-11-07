import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import CompanyCard from '../views/CompanyCard'



const Companies: React.FC = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Welcome to the Companies page</h2>

          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <CompanyCard name={''} address={''} url={''} employees={[]} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Companies