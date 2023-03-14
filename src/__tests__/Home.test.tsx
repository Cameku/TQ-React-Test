import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../routes/Home';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

test('triggers path change', () => {
    const history = createMemoryHistory();

    render(
        <Router history={history}>
            <Home />
        </Router>
    );

    const viewCompaniesBtn = screen.getByText('View Companies');
    expect(viewCompaniesBtn).toBeInTheDocument();

    userEvent.click(viewCompaniesBtn);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/Companies');
});


