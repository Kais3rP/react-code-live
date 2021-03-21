/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'

const Controls = ({ storageIdentifier, code, setCode }) => {
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

  function handleSave() {
    localStorage.setItem(storageIdentifier, code)
  }

  function handleLoad() {
    const content = localStorage.getItem(storageIdentifier)
    setCode(content || '')
  }

  return (
    <div data-id='controls-container'>
      <div data-id='edit-container'>
        <button onClick={handleCopy}>Copy</button>
        <button onClick={handlePaste}>Paste</button>
        <button onClick={handleCut}>Clear</button>
      </div>
      <div data-id='storage-container'>
        <button data-id='save-button' onClick={handleSave}>
          Save
        </button>
        <button data-id='load-button' onClick={handleLoad}>
          Load
        </button>
      </div>
    </div>
  )
}

Controls.propTypes = {
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
  storageIdentifier: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Controls
