// Importing necessary components and styles for the single repository page
import React, { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom'; 
import './styles/GithubPortfolio.css'; 

// Function component for the single repository page
const SingleRepoPage = () => {
  // Using the useParams hook to access the id parameter from the URL
  const { id } = useParams();
  // State variable to store repository details fetched from the GitHub API
  const [repoDetails, setRepoDetails] = useState(null);

  // useEffect hook to fetch repository details when the component mounts or when the id parameter changes
  useEffect(() => {
    // Function to fetch repository details from the GitHub API
    const fetchRepoDetails = async () => {
      try {
        // Fetching data for a specific repository using the provided id
        const response = await fetch(`https://api.github.com/repositories/${id}`);
        const data = await response.json(); // Parsing the JSON response
        setRepoDetails(data); // Updating the state with the fetched repository details
      } catch (error) {
        console.error('Error fetching repository details:', error); // Handling errors if fetching fails
      }
    };

    fetchRepoDetails();
  }, [id]); // Specifying the id parameter as a dependency for the useEffect hook

  if (!repoDetails) {
    return <div>Loading...</div>;
  }

  // If repository details are available, display them on the page
  return (
    // Div containing details of the single repository
    <div>
      <h2>{repoDetails.name}</h2>
      <p>Description: {repoDetails.description}</p>
      <p>Forks: {repoDetails.forks_count}</p>
      <p>License: {repoDetails.license ? repoDetails.license.name : 'N/A'}</p>
      <p>Owner: {repoDetails.owner.login}</p>
      <p>Size: {repoDetails.size} KB</p>
      <p>Watchers: {repoDetails.watchers_count}</p>
      <p>Private: {repoDetails.private ? 'Yes' : 'No'}</p>
      <p>Archived: {repoDetails.archived ? 'Yes' : 'No'}</p>
      <p>Open Issues: {repoDetails.open_issues}</p>
      <p>Created At: {new Date(repoDetails.created_at).toLocaleString()}</p>
      <p>Last Updated At: {new Date(repoDetails.updated_at).toLocaleString()}</p>
      <Link className='error-button' to="/">Go Back</Link>
    </div>
  );
};

export default SingleRepoPage;
