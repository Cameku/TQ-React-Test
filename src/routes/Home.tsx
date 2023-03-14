import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ApiHelper } from '../helpers/ApiHelper';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';


const Home: React.FC = () => {

  useEffect(() => {
    const runAsync = async () => {
      await retrieveAndStoreKeyAsync();
    };

    runAsync();

  }, []);

  //Instantiate api helper
  const apiHelper = new ApiHelper();
  const storageHelper = new LocalStorageHelper();

  //Retrieve and store key
  const retrieveAndStoreKeyAsync = async () => {
    const key = await apiHelper.getKeyAsync();
    storageHelper.store('api-key', key)
    return key;
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
          <h1>React API Project</h1>
          <p>
            Welcome to the TerraQuest React interview project! Please use this project to develop the test requirements
            within.
          </p>

          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button type='button' onClick={viewCompany}>View Companies</Button>{' '}
          {/*    <Link to='/Companies' className="btn btn-primary">Companies Using Link</Link>{' '}
          <Link to='/EmployeesModal' className="btn btn-primary">Employees Modal</Link> */}
        </Col>
        <Col>
          {/* <Button onClick={retrieveAndStoreKey}>Store key</Button> */}
          {" "}
          {/*   <Button onClick={async () => await retrieveAndStoreCompaniesAsync(storageHelper.get('api-key')!)}>Store Companies</Button>
 */}
        </Col>
      </Row>

    </Container>

  );
};

export default Home;
