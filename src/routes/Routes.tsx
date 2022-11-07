import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Companies from './Companies';
import NotFound from './NotFound';
import CompanyCard from '../views/CompanyCard';
import CreateCompany from './CreateCompany';
import EmployeesModal from '../views/EmployeesModal';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/companies" component={Companies} />
      <Route path="/companycard" component={CompanyCard} />
      <Route path="/createcompany" component={CreateCompany} />
      <Route path="/employeesmodal" component={EmployeesModal} />

      <Route path='/' component={NotFound} />
    </Switch>
  );
};

export default Routes;
