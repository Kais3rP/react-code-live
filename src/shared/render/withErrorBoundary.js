import React, { Component } from 'react'
import ErrorLogger from '../../components/error-logger/ErrorLogger'

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
      ) : (
        <ErrorLogger error='Not a valid React Component.' />
      )
    }
  }

export default withErrorBoundary
