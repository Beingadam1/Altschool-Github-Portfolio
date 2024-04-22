// Importing necessary components and styles for the application
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import ErrorBoundary from './components/ErrorBoundary';
import GithubPortfolio from './components/GithubPortfolio';
import SingleRepoPage from './components/SingleRepoPage'; 
import ErrorPage from './components/ErrorPage'; 
import NotFound from './components/NotFound'; 
import './App.css'; 

// Main function component for the entire application
function App() {
  return (
    <Router>
      <div className="centered-wrapper">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<GithubPortfolio />} />
            <Route path="/repo/:id" element={<SingleRepoPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}

export default App;
