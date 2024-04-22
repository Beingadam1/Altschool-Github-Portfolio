import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/GithubPortfolio.css'; 

const GithubPortfolio = () => {
  // State variables
  const [repos, setRepos] = useState([]); // All repositories fetched from GitHub API
  const [filteredRepos, setFilteredRepos] = useState([]); // Filtered repositories based on search query
  const [searchQuery, setSearchQuery] = useState(''); // Search query entered by user
  const [currentPage, setCurrentPage] = useState(1); // Current page number for pagination
  const [reposPerPage] = useState(6); // Number of repositories per page (changed to 6)
  const [noResults, setNoResults] = useState(false); // Flag to indicate if no repositories are found

  // Fetch repositories from GitHub API on component mount
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/beingadam1/repos');
        const data = await response.json();
        setRepos(data);
        setFilteredRepos(data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos(); // Call fetchRepos function when component mounts
  }, []);

  // Filter repositories when searchQuery changes
  useEffect(() => {
    filterRepos(searchQuery); // Call filterRepos function whenever searchQuery changes
    // eslint-disable-next-line
  }, [searchQuery]);

  // Function to handle change in search input
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  // Function to filter repositories based on search query
  const filterRepos = query => {
    const filtered = repos.filter(repo =>
      repo.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRepos(filtered);
    setCurrentPage(1); // Reset to first page when filtering
    setNoResults(filtered.length === 0 && query.length > 0); // Set noResults state
  };

  // Get current repositories for pagination
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo);

  // Function to change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="centered-container">
      <h1>My GitHub Repositories</h1>
      <div className='input-container'>
        <input type="text" id="search" value={searchQuery} onChange={handleSearchChange} />
      </div>
      {noResults && <p className="no-results">No repositories found.</p>}
      <ul className='repo-container'>
        {currentRepos.map(repo => (
          <li className='repo-card' key={repo.id}>
            <Link className='repo-link' to={`/repo/${repo.id}`}>{repo.name}</Link>
          </li>
        ))}
      </ul>
      <nav>
        <ul className="pagination">
          {Array.from({ length: Math.ceil(filteredRepos.length / reposPerPage) }, (_, i) => (
            <li key={i} className={currentPage === i + 1 ? 'active' : ''}>
              <button className='pagination-button' onClick={() => paginate(i + 1)}>{i + 1}</button>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <Link className='error-button' to="/error"> Error Boundary</Link>
        <button className='notfound-button' onClick={() => window.location.href = '/nonexistent-route'}> 404 Page</button>
      </div>
    </div>
  );
};

export default GithubPortfolio;
