import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const CreateCompany: React.FC = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Create Company</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form style={{ width: '40rem' }}>
              <Form.Group className="mb-3" controlId="name.ControlInput1">
                <Form.Label>Company Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address.ControlTextarea1">
                <Form.Label>Company Address</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="website.ControlInput1">
                <Form.Label>Company Website Link</Form.Label>
                <Form.Control type="text" placeholder="Website Link" />
              </Form.Group>
              <br /><hr />
              <Form.Group className="mb-3" controlId="employees.ControlInput1">
                <Form.Label>Add employees</Form.Label>
                <Form.Control type="text" placeholder="Name" /><br />
                <Form.Control type="text" placeholder="Age" />
              </Form.Group>
              <br />
              <Button variant='dark' type="submit">Add to the list of companies</Button>
            </Form>
          </Col>
        </Row>
      </Container>


    </div>
  )
}

export default CreateCompany