
import React from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.style'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://image.shutterstock.com/image-vector/404-error-page-design-concept-600w-1075475231.jpg" />
          <ErrorImageText>sorry the page is broken down</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
