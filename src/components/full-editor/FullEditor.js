import React from 'react'
import Editor from '../editor/Editor'
import useManageJs from '../../shared/hooks/useManageJs'
import useManageCss from '../../shared/hooks/useManageCss'
import 'style-scoped'
/* import styledJsx from "styled-jsx" */
import { exampleJs, exampleCss } from '../../data/exampleCode'

export default function FullEditor({
  initialJs,
  initialCss,
  scope,
  textAreaClassName,
  getJsCode,
  getCssCode,
  render,
  children,
  ...props
}) {
  const { code, Preview, handleJsChange, handleJsKeyDown } = useManageJs(
    initialJs,
    scope
  )
  const { css, handleCssChange } = useManageCss(initialCss)

  return (
    <div {...props} style={{ position: 'relative' }}>
      <style scoped key={css}>
        {/* THE KEY ATTRIBUTE HAS TO BE DYNAMIC AND UNIQUE IN THIS CASE TO MAKE THE SCOPE ATTRIBUTE TO WORK PROPERLY */}
        {css}
      </style>
      <div data-id='preview-container'>{Preview && <Preview />}</div>
      <div data-id='js-container'>
        <Editor
          language='js'
          code={code}
          placeholder='WRITE REACT CODE HERE'
          onValueChange={getJsCode}
          onChange={(e) => {
            const value = e.target.value
            handleJsChange(e)
            if (getJsCode) getJsCode(value)
          }}
          onKeyDown={handleJsKeyDown}
          className={textAreaClassName}
        />
      </div>
      <div data-id='css-container'>
        <Editor
          language='css'
          code={css}
          placeholder='WRITE CSS CODE HERE'
          onChange={(e) => {
            const value = e.target.value
            handleCssChange(value)
            if (getCssCode) getCssCode(value)
          }}
          className={textAreaClassName}
        />
      </div>
      {typeof children === 'function' && children(code, css)}
      {render && render(code, css)}
    </div>
  )
}

/* FullEditor.defaultProps = {
  initialJs: exampleJs,
  initialCss: exampleCss
} */
