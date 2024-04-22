// Importing necessary components and styles for the not found page
import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './styles/GithubPortfolio.css';
// Function component for the not found page
const NotFound = () => {
  const navigate = useNavigate(); // Using the useNavigate hook to handle navigation

  // Function to go back one step in history when the "Go Back" button is clicked
  const goBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    // Div containing the 404 error message and a button to go back
    <div className="error-container">
      <h2>404 Not Found</h2> 
      <p>The page you are looking for does not exist.</p> 
      <button className='notfound-button' onClick={goBack}>Go Back</button> 
    </div>
  );
};

export default NotFound;