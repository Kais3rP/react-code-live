import React, { Component } from 'react'
import ErrorLogger from '../../components/error-logger/ErrorLogger'

const withErrorBoundary = (MyComponent, check) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = { hasError: false }
    }

    componentDidCatch(error) {
      console.error(error)
    }

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, msg: error }
    }

    render() {
      // ERROR CATCHING IN DEV MODE
      if (process.env.NODE_ENV === 'development') {
        try {
          /* CATCHES THE FUNCTIONS WITH NO RETURNS OR WITH SYNTAX ERRORS.
        TO PERFORM THE CHECK IT HAS TO CHECK THAT THE FUNCTION DOESN'T CONTAIN HOOKS OR 
        IT WILL THROW AN ERROR BECAUSE HOOKS CAN BE EXECTUED ONLY INSIDE A REACT FUNCTION BODY */

          // CHECK IS CLASS AND HAS NO RENDER METHOD
          if (check._isClass && !check._hasRender)
            throw Error('The Class has no render method')
          // CHECK IS CLASS AND THE RENDER METHOD DOESN?T RETURN ANYTHING
          if (check._isClass && !new MyComponent().render())
            throw Error('Render method has to return anything or null')

          // CHECK IS FUNCTION AND DOESN?T RETURN ANYTHING + CATCHES ALL RUNTIME ERRORS BY CALLING THE FUNCTION
          if (
            typeof MyComponent === 'function' &&
            !MyComponent() &&
            !check._isClass
          ) {
            throw Error(
              "The function doesn't have a return statement or it doesn't return anything"
            )
          }
        } catch (e) {
          // DOESN'T CATCH THE HOOKS CALL OUTSIDE FUNCTION BODY ERROR
          if (isHookError(e)) {
            return <MyComponent />
          } else {
            return <ErrorLogger error={e.toString()} />
          }
        }
      }
      return typeof MyComponent === 'function' && !this.state.hasError ? (
        <MyComponent />
      ) : (
        <ErrorLogger error={this.state.msg} />
      )
    }
  }
}

export default withErrorBoundary

function isHookError(err) {
  const hooksErrorMessage =
    'Hooks can only be called inside of the body of a function component.'

  return new RegExp(
    `${hooksErrorMessage.replace(/\s/g, '').toLowerCase()}`
  ).test(err.toString().replace(/\s/g, '').toLowerCase())
}
