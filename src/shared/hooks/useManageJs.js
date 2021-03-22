import { useState, useEffect, useRef } from 'react'
import { generateElement } from '../render'
import { calcNewCode } from '../utils'

export default function useManageJs(initialJs, scope) {
  const [js, setJs] = useState(initialJs)
  const [Preview, setPreview] = useState(null)
  const [error, setError] = useState(null)

  const [isTyping, setIsTyping] = useState(false)

  const [currentChar, setCurrentChar] = useState(null)
  const [cursorIdx, setCursorIdx] = useState(0)

  const debounceTimeoutRef = useRef(null)
  const textRef = useRef()

  // @ ERROR CALLBACK

  function errorCallback(e) {
    setError(e.toString())
  }

  // @ - PARSER

  function parseAndRender(_js) {
    try {
      const ParsedSync = generateElement({ js: _js, scope }, errorCallback)
      setPreview(() => ParsedSync)
      setError(null)
    } catch (e) {
      errorCallback(e.toString())
      setPreview(null)
    }
  }

  // @@ EFFECT : PARSE js ONLY WHEN THE USER STOPS TYPING

  useEffect(() => {
    if (!isTyping) parseAndRender(js)
  }, [isTyping, js])

  // @@ EFFECT : PLACE THE CURSOR IN THE MIDDLE OF THE BRACKETS

  useEffect(() => {
    if (textRef.current) textRef.current.selectionEnd = cursorIdx
  }, [cursorIdx])

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
