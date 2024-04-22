// Importing necessary components and styles for the error boundary
import React, { Component } from 'react';

// Class component for the error boundary
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    this.setState({ hasError: true });
  }

  // Render method that displays the fallback UI if an error has occurred
  render() {
    if (this.state.hasError) {
      return (
        // Div containing the error message
        <div>
          <h2>Something went wrong!</h2>
          <p>Please try refreshing the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
