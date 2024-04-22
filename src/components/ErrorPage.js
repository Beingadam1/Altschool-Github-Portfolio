// Importing necessary components and styles for the error page
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './styles/GithubPortfolio.css';

// Function component for the error page
const ErrorPage = () => {
   // Div containing the error message and a button to go back
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p className='paragraph'>Please try refreshing the page.</p>
      <Link className='error-button' to="/">Go Back</Link>
    </div>
  );
};

export default ErrorPage;
