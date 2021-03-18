import React from 'react'

export default function ErrorLogger({ error, ...props }) {
  return (
    <div data-id='error-container' {...props}>
      <h4>{error}</h4>
    </div>
  )
}
