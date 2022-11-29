import React, { useState } from 'react'
import { Container, Row, Col, Form, Button, } from 'react-bootstrap';
import { ApiHelper } from '../helpers/ApiHelper';
import { Company } from '../models/Company';
import { Employee } from '../models/Employee';



const CreateCompany: React.FC = () => {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeAge, setEmployeeAge] = useState<number>(0);
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);



  //Post company data
  const submitCompany = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const company: Company = { name, address, url, employees: employeeList }
    console.log(company);

    //Instantiate api helper
    const apiHelper = new ApiHelper();
    try {
      await apiHelper.submitCompanyAsync(company);
    } catch (error) {
      console.log(error);
    }
  }

  //Add to employee list
  const addEmployees = () => {
    setEmployeeList([...employeeList, { name: employeeName, age: employeeAge }])
    setEmployeeName('');
    setEmployeeAge(0);
  }

  //Remove from employee list
  const removeEmployee = (index: number) => {
    const list = [...employeeList]
    list.splice(index, 1);
    setEmployeeList(list)
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
            </Form>
            <br /><hr />
            <Form>
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
            </Form>
            <Button variant="primary" type="submit" onClick={addEmployees}>
              Add  to Employee list
            </Button> {' '}


            <Button variant="primary" type="submit">
              Save  Company and Employees
            </Button>

            <hr />
          </Col>
          <Col>
            <br /> <br /> <br />
            {/* https://www.robinwieruch.de/react-remove-item-from-list/ */}
            <h2>Employee List</h2> <br />
            {
              employeeList.map((employee, index) => (
                <div key={index}>
                  <Row>
                    <Col>Name: {employee.name}</Col>
                    <Col>Age: {employee.age}</Col>
                    <Button
                      variant='danger'
                      style={{ marginBottom: "5px" }}
                      type="submit"
                      onClick={() => removeEmployee(index)}
                    >Remove Employee</Button>
                  </Row>
                </div>
              ))
            }

          </Col>
        </Row>
      </Container>
      <br /><br /><br />

    </div>
  );
}

export default CreateCompany