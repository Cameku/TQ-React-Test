# TQ React Interview Application

This application is a pre-interview test designed to evaluate candidate performance. Please follow the steps below, and submit a zipped file (excluding build & node_modules folders) as requested.

This test is designed to last 90 minutes.

# Instructions

1. Perform an API call to get a key from the API. Store this locally, as this will be used by your application to perform further API calls.

2. Create a `Companies.tsx` component inside the `routes` folder. Add this as a route in the Routes.tsx file. Adjust the button on the home page to navigate to this page.

3. Perform an API call to fetch a collection of companies. Store this list locally.

4. Create a component called `CompanyCard.tsx` inside of `views` to display a Card with the following information:

   - Name
   - Address
   - Postcode
   - Link to Website
   - Button to view Employees

5. Using this component, display a deck of `CompanyCard.tsx` cards using all of the companies fetched. Errors should be handled and a user-friendly message should be displayed appropriately.

6. Add a "View Employees" button to the cards. This should create a `Modal` when clicked,
   containing a list of all employees. The modal should be able to be closed with a close button at the bottom of the pane.

7. Create a `CreateCompany.tsx` component inside the `route` folder. Add this as a route in the `Routes.tsx` file.
   This will have inputs for the above fields, as well as the ability to add 1-n employees. Add a button to `Companies.tsx` to navigate to this page.

8. POST the new company to the API, along with several employees within the request. Errors should handled and a user-friendly message should be displayed appropriately. This should redirect back to the main screen on success, and the cards list updated to show the newest added.

9. Create unit tests for all components you have developed.

10. Migrate your data and API logic into Redux, utilizing the Redux Thunk library. We have provided a blank Redux store for you to use.

# Building the project
- `npm install` Installs all required packages.

- `npm start` Starts the development server for debugging.


# Notes
- [React Bootstrap](https://react-bootstrap.github.io/components/alerts) is the component library of choice. Please use this to accelerate the development process.

- API URL: https://tqinterviewapi.azurewebsites.net (This will also link to the swagger page to view API endpoints).

- You will be evaluated on your TypeScript and general development practices. There are intentional errors in TypeScript usage, which can be fixed if desired.
- The API intentionally throws errors occasionally, in order to evaluate all implementations.
