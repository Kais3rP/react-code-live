import React from 'react'
import { highlight, languages } from 'prismjs/components/prism-core'
import Editor from '../../lib/editor'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-funky.css'

export default function _Editor({ code, language, ...props }) {
  let lang
  if (language === 'js') {
    lang = languages.js
  } else if (language === 'css') {
    lang = languages.css
  } else lang = language.js
  return (
    <Editor
      value={code}
      highlight={(_code) => highlight(_code, lang)}
      padding={30}
      {...props}
    />
  )
}
