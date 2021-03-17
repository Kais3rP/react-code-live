import React, { Component } from 'react'
import ErrorLogger from '../../components/error-logger/ErrorLogger'

const withErrorBoundary = (MyComponent, errorCallback) => {
  return class extends Component {
  constructor(props){
    super(props)
    this.check = true;
  }
    componentDidCatch(error) {
      errorCallback(error)
      this.check = false
    }

    render() {
    return this.check ? <MyComponent /> : null
    }
  }
}

export default withErrorBoundary
