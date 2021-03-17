import { useState, useEffect, useRef } from 'react'
import { generateElement } from '../render'
import { calcNewCode } from '../utils'
import { exampleJs } from '../../data/exampleCode'

export default function useManageJs(initialJs, scope = {}) {
  const [code, setCode] = useState(
    initialJs && typeof initialJs === 'string' ? initialJs : ``
  )
  const [Preview, setPreview] = useState(null)

  const [isTyping, setIsTyping] = useState(false)

  const [currentChar, setCurrentChar] = useState(null)
  const [cursorIdx, setCursorIdx] = useState(0)

  const debounceTimeoutRef = useRef(null)
  const textRef = useRef()

  // @@ EFFECT : PARSE CODE ONLY WHEN THE USER STOPS TYPING
  useEffect(() => {
    if (!isTyping && code) parseAndRender(code)
  }, [isTyping])

  // @@ EFFECT : PLACE THE CURSOR IN THE MIDDLE OF THE BRACKETS
  useEffect(() => {
    if (textRef.current) textRef.current.selectionEnd = cursorIdx
  }, [cursorIdx])

  // @@ - PARSER
  function parseAndRender(code) {
    const ParsedSync = generateElement({ code, scope })
    setPreview(() => ParsedSync)
  }

  // @@ - HANDLE KEY DOWN TO INTERCEPT CHARACTERS BEFORE ON CHANGE EVENT
  function handleJsKeyDown(e) {
    const key = e.key
    setCurrentChar(key)
  }

  // @@ - HANDLE CHANGE EVENT
  function handleJsChange(e) {
    // HANDLE TEXT WRITTEN IN THE TEXTAREA
    textRef.current = e.target
    const code = e.target.value
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
        setCode(calcNewCode(code, '}', idx))
        break
      case '(':
        setCode(calcNewCode(code, ')', idx))
        break
      case '[':
        setCode(calcNewCode(code, ']', idx))
        break
      default:
        setCode(code)
    }
  }

  return {
    code,
    handleJsChange,
    handleJsKeyDown,
    Preview
  }
}
