import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ApiHelper } from '../helpers/ApiHelper';





const Home: React.FC = () => {

  useEffect(() => {
    retrieveAndStoreKeyAsync();
    retrieveAndStoreCompaniesAsync();
  }, [])

  //Instantiate api helper
  const apiHelper = new ApiHelper();

  //Retrieve and store key
  const retrieveAndStoreKeyAsync = async () => {
    const key = await apiHelper.getKeyAsync('url');
    window.localStorage.setItem('key', key)
  }

  //Retrieve and store company
  const retrieveAndStoreCompaniesAsync = async () => {
    try {
      const companies = await apiHelper.getCompaniesAsync(window.localStorage.getItem('key')!);
      window.localStorage.setItem('companies', JSON.stringify(companies));
    } catch (error) {
      alert("Sorry about this, please click ok to continue!");
    }

  }

  //view company
  let history = useHistory();
  const viewCompany = () => {
    history.push("/Companies");
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1>React Interview Project</h1>
          <p>
            Welcome to the TerraQuest React interview project! Please use this project to develop the test requirements
            within.
          </p>

          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={viewCompany}>View Companies</Button>{' '}
          {/*    <Link to='/Companies' className="btn btn-primary">Companies Using Link</Link>{' '}
          <Link to='/EmployeesModal' className="btn btn-primary">Employees Modal</Link> */}
        </Col>
        <Col>
          {/* <Button onClick={retrieveAndStoreKey}>Store key</Button> */}
          {" "}
          <Button onClick={async () => await retrieveAndStoreCompaniesAsync()}>Store Companies</Button>

        </Col>
      </Row>

    </Container>

  );
};

export default Home;
