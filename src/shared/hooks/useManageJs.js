import { useState, useEffect, useRef } from 'react'
import { generateElement } from '../render'
import { calcNewCode } from '../utils'
import { exampleJs } from '../../data/exampleCode'

export default function useManageJs(initialJs, scope = {}) {
  const [js, setJs] = useState(
    initialJs && typeof initialJs === 'string' ? initialJs : ``
  )
  const [Preview, setPreview] = useState(null)
  const [error, setError] = useState(null)

  const [isTyping, setIsTyping] = useState(false)

  const [currentChar, setCurrentChar] = useState(null)
  const [cursorIdx, setCursorIdx] = useState(0)

  const debounceTimeoutRef = useRef(null)
  const textRef = useRef()

  // @@ EFFECT : PARSE js ONLY WHEN THE USER STOPS TYPING
  useEffect(() => {
    if (!isTyping && js) parseAndRender(js)
  }, [isTyping])

  // @@ EFFECT : PLACE THE CURSOR IN THE MIDDLE OF THE BRACKETS
  useEffect(() => {
    if (textRef.current) textRef.current.selectionEnd = cursorIdx
  }, [cursorIdx])

  function errorCallback(e) {
    setError(e.toString())
  }
  // @@ - PARSER
  function parseAndRender(js) {
    try {
      const ParsedSync = generateElement({ js, scope }, errorCallback)
      setPreview(() => ParsedSync)
      setError(null)
    } catch (e) {
      errorCallback(e.toString())
      setPreview(null)
    }
  }

  // @@ - HANDLE KEY DOWN TO INTERCEPT CHARACTERS BEFORE ON CHANGE EVENT
  function handleJsKeyDown(e) {
    const { key } = e
    setCurrentChar(key)
  }

  // @@ - HANDLE CHANGE EVENT
  function handleJsChange(e) {
    // HANDLE TEXT WRITTEN IN THE TEXTAREA
    textRef.current = e.target
    const _code = e.target.value
    // HANDLE PARSING CODE DEBOUNCE
    window.clearTimeout(debounceTimeoutRef.current)
    setIsTyping(true)
    debounceTimeoutRef.current = setTimeout(() => {
      setIsTyping(false)
    }, 1000)
    setJs(_code)
    // HANDLE REPETITION OF BRACKETS
    const idx = e.target.selectionStart
    setCursorIdx(idx)
    switch (currentChar) {
      case '{':
        setJs(calcNewCode(_code, '}', idx))
        break
      case '(':
        setJs(calcNewCode(_code, ')', idx))
        break
      case '[':
        setJs(calcNewCode(_code, ']', idx))
        break
      default:
        setJs(_code)
    }
  }

  return {
    js,
    setJs,
    handleJsChange,
    handleJsKeyDown,
    Preview,
    error,
  }
}
