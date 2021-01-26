import React from 'react';
import PropTypes from 'prop-types';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Error</h2>;
    }
    return this.props.children;
  }
}

ErrorBoundary.propType = {
  children: PropTypes.isRequired,
};

export default ErrorBoundary;
