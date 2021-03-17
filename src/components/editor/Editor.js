import React from 'react'
import Editor from '../../lib/editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-funky.css'

export default function _Editor({ code, language, ...props }) {
  return (
    <Editor
      value={code}
      highlight={(code) =>
        highlight(
          code,
          language === 'js'
            ? languages.js
            : language === 'css'
            ? languages.css
            : languages.js
        )
      }
      padding={30}
      {...props}
    />
  )
}
