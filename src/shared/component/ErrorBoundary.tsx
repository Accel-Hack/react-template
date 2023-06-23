import React, { ErrorInfo } from 'react'

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('ErrorBoundary.componentDidCatch', { error, errorInfo })
  }

  render() {
    // FIXME: make error page
    if (this.state.hasError) {
      return <div>Fix to Error page</div>
    }
    return <>{this.props.children}</>
  }
}

export default ErrorBoundary
