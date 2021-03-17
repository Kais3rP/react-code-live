import React from 'react'

export default function ErrorLogger({ error, ...props }) {
  return (
    <div
      style={{
        width: '100%',
        zIndex: 2,
        top: 0,
        left: 0,
        overflowWrap: 'breakWord',
        padding: '10px',
        background: 'tomato',
        fontWeight: 'normal',
        fontFamily: 'inherit',
        fontSize: '14px'
      }}
      {...props}
    >
      <h4>{error}</h4>
    </div>
  )
}
