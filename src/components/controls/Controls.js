import React, { useState, useEffect } from 'react'

const Controls = ({ code, setCode }) => {
  function handleCopy(e) {
    navigator.clipboard.writeText(code)
  }

  async function handlePaste() {
    const text = await navigator.clipboard.readText()
    setCode(text)
  }

  return (
    <div data-id='controls-container'>
      <button onClick={handleCopy}>Copy</button>
      <button>Cut</button>
      <button onClick={handlePaste}>Paste</button>
    </div>
  )
}

export default Controls
