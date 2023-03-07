import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { ApiHelper } from '../helpers/ApiHelper';
import { LocalStorageHelper } from '../helpers/LocalStorageHelper';
import { Company } from '../models/Company';
import CompanyCard from '../views/CompanyCard';


const Companies: React.FC = (props) => {

  const apiHelper = new ApiHelper();
  const storageHelper = new LocalStorageHelper();

  const [companies, setCompanies] = useState<Company[]>([]);

  //get new company data and store
  const retrieveAndStoreCompaniesAsync = async (key: string) => {
    try {
      let retrievedCompanies = await apiHelper.getCompaniesAsync(key);
      if (Array.isArray(retrievedCompanies) && retrievedCompanies.length > 0) {
        storageHelper.store('companies', JSON.stringify(retrievedCompanies));
        setCompanies(retrievedCompanies);
      } else {
        alert('Could not retrieve companies');
      }

    } catch (error) {
      console.log('Could not store new company data - (toaste here!) - ' + error);
    }

  }

  useEffect(() => {
    const runCompanyAsync = async () => {
      const key = storageHelper.get('api-key');
      await retrieveAndStoreCompaniesAsync(key!);
    }
    runCompanyAsync();
  }, [])

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
        companies?.length > 0 ? (
          companies.map((company, index) => (
            <Container key={index}>
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
        <Row className="mb-4">
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