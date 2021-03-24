/* eslint-disable global-require */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { highlight, languages } from 'prismjs/components/prism-core'
import Editor from '../../lib/editor'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'

const classNamePrism = `line-numbers`

export default function _Editor({
  code,
  language,
  placeholder,
  onChange,
  onKeyDown,
  textareaAttributes,
  theme,
}) {
  useEffect(() => {
    switch (theme) {
      case 'funky':
        return require('prismjs/themes/prism-funky.css')
      case 'coy':
        return require('prismjs/themes/prism-coy.css')
      case 'dark':
        return require('prismjs/themes/prism-dark.css')
      case 'okaidia':
        return require('prismjs/themes/prism-okaidia.css')
      case 'tomorrow':
        return require('prismjs/themes/prism-tomorrow.css')
      case 'solarized':
        return require('prismjs/themes/prism-solarizedlight.css')
      default:
        return require('prismjs/themes/prism-solarizedlight.css')
    }
  }, [])

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
      classNamePrism={classNamePrism}
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
  theme: PropTypes.object,
}
