import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, } from 'react-bootstrap';
import { Company } from '../models/Company';



const CreateCompany: React.FC = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeAge, setEmployeeAge] = useState<number>(0);



  //Post company data
  const submitCompany = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const companies: Company = { name, address, url, employees: [{ name: employeeName, age: employeeAge }] }
    console.log(companies);

    await fetch("https://tqinterviewapi.azurewebsites.net/api/Companies?key=4777644c-b557-48ea-bff1-9b93599f0f7a", {

      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(companies)

    }).then(() => { console.log('New company added ') }).catch(error => console.log(error))
  }


  return (
    <div className=''>

      <Container>
        <Row>
          <Col>
            <br />
            <h2>Create Company</h2><br /><br />

            <Form style={{ width: '40rem' }} onSubmit={submitCompany}>
              <Form.Group className="mb-3" controlId="formCompanyName" >
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter company name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCompanyAddress.ControlTextarea">
                <Form.Label>Company Address</Form.Label>
                <Form.Control as="textarea" rows={3}
                  placeholder="Type company address"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCompanyWebsite">
                <Form.Label>Company Website</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter company web link"
                  required
                  value={url}
                  onChange={(e) => setUrl(e.target.value)} />
              </Form.Group>
              <br />

              <Form.Group className="mb-3" controlId="formEmployeeName">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter employee name"
                  value={employeeName}
                  onChange={(e) => setEmployeeName(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmployeeAge" >
                <Form.Label>Employee Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter employee age"
                  value={employeeAge}
                  onChange={(e) => setEmployeeAge(Number(e.target.value))} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Add  to Employee list
              </Button> {' '}
              <Button variant="primary" type="submit">
                Save  Company and Employees
              </Button>
            </Form>
            <hr />
          </Col>
          <Col>
            <br /> <br /> <br />
            <h2>Employee List</h2> <br />
            <Row>
              <Col>Name: <b>{name} </b> </Col>
              <Col>Age: <b> {employeeAge}</b></Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <br /><br /><br />

    </div>
  );
}

export default CreateCompany