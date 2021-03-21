import React from 'react'
import PropTypes from 'prop-types'

export default function ErrorLogger({ error }) {
  return (
    <div data-id='error-container' data-testid='error-container'>
      <h4>{error}</h4>
    </div>
  )
}

ErrorLogger.propTypes = {
  error: PropTypes.string,
}
