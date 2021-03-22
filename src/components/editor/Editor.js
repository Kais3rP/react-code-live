import React from 'react'
import PropTypes from 'prop-types'
import { highlight, languages } from 'prismjs/components/prism-core'
import Editor from '../../lib/editor'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-funky.css'

export default function _Editor({
  code,
  language,
  placeholder,
  onChange,
  onKeyDown,
  textareaAttributes,
}) {
  let lang
  if (language === 'js') {
    lang = languages.js
  } else if (language === 'css') {
    lang = languages.css
  } else lang = language.js

  function highlightCode(_code) {
    return highlight(_code, lang)
  }

  return (
    <Editor
      value={code}
      highlight={highlightCode}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      textareaAttributes={textareaAttributes}
    />
  )
}

_Editor.propTypes = {
  code: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  textareaAttributes: PropTypes.object,
}
