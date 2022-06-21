import { ErrorBoundaryProps } from './error-boundary.props';
import { ErrorBoundaryState } from './error-boundary.state';
import React, { ErrorInfo } from 'react';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: Readonly<ErrorBoundaryProps>) {
    super(props);
    this.state = { hasError: false, error: '', stack: '', componentStack: '' };
  }

  static getDerivedStateFromError(error: ErrorBoundaryProps) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    this.setState(({ error: error.message, stack: error.stack!, componentStack: errorInfo.componentStack }))
    console.log(error)
    console.log(errorInfo.componentStack)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <>
        <h1>Something went wrong.</h1>
        <div>
          {this.state.error}
          <br />
          <br />
          {this.state.stack}
        </div>
      </>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;