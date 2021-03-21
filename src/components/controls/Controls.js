/* eslint-disable react/button-has-type */
import React from 'react'
import propTypes from 'prop-types'

const Controls = ({ code, setCode }) => {
  function handleCopy(e) {
    navigator.clipboard.writeText(code)
  }

  async function handlePaste() {
    const text = await navigator.clipboard.readText()
    setCode(text)
  }

  function handleCut() {
    setCode('')
  }
  return (
    <div data-id='controls-container'>
      <button onClick={handleCopy}>Copy</button>
      <button onClick={handlePaste}>Paste</button>
      <button onClick={handleCut}>Clear</button>
    </div>
  )
}

Controls.propTypes = {
  code: propTypes.string.isRequired,
  setCode: propTypes.string.isRequired,
}

export default Controls
