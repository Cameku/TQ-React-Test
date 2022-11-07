import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
//import { Company } from "../models/Company";
import { Link } from 'react-router-dom';
import { ApiHelper } from '../helpers/ApiHelper';





const Home: React.FC = () => {
  // const [key, setKey] = useState('');
  //const [compData, setCompData] = useState<Company[]>([]);

  //Instantiate api helper
  const apiHelper = new ApiHelper();

  //Retrieve and store key
  const retrieveAndStoreKey = async () => {
    const key = await apiHelper.getKeyAsync('url');
    window.localStorage.setItem('key', key)
  }

  //Retrieve and store company
  const retrieveAndStoreCompanies = async () => {
    try {
      const companies = await apiHelper.getCompaniesAsync(window.localStorage.getItem('key')!);
      window.localStorage.setItem('companies', JSON.stringify(companies));
    } catch (error) {
      alert(error);
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
          <Link to='/Companies' className="btn btn-primary">Companies Using Link</Link>{' '}
          <Link to='/EmployeesModal' className="btn btn-primary">Employees Modal</Link>
        </Col>
        <Col>
          <Button onClick={retrieveAndStoreKey}>Store key</Button>
          {" "}
          <Button onClick={async () => await retrieveAndStoreCompanies()}>Store Companies</Button>
          {" "}
          <Link to='/CompanyCard' className="btn btn-primary">Company card</Link>{' '}


        </Col>
      </Row>

    </Container>

  );
};

export default Home;
