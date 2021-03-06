import React, { Component } from 'react'

const withErrorBoundary = (MyComponent, errorCallback) =>
  class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
      this.check = true
    }

    componentDidCatch(error) {
      errorCallback(error)
      this.check = false
    }

    render() {
      return this.check && typeof MyComponent === 'function' ? (
        <MyComponent />
      ) : null
    }
  }

export default withErrorBoundary
