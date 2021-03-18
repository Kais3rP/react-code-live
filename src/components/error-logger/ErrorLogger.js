import React from 'react'
import PropTypes from 'prop-types'

export default function ErrorLogger({ error, ...props }) {
  return (
    <div data-id='error-container' {...props}>
      <h4>{error}</h4>
    </div>
  )
}

ErrorLogger.propTypes = {
  error: PropTypes.string,
}
