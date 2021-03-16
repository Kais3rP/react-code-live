import React, { useState } from 'react'
import Editor from '../editor/Editor'
import useManageJs from '../../shared/hooks/useManageJs'
import useManageCss from '../../shared/hooks/useManageCss'
import 'style-scoped'
/* import styledJsx from "styled-jsx" */
import { exampleCode } from '../../data/exampleCode'

export default function FullEditor({
  initialCode,
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
    initialCode,
    scope
  )
  const { css, handleCssChange } = useManageCss(initialCss)

  return (
    <div {...props} style={{ position: 'relative' }}>
      <style scoped key={css}>
        {' '}
        {/* THE KEY ATTRIBUTE HAS TO BE DYNAMIC AND UNIQUE IN THIS CASE TO MAKE THE SCOPE ATTRIBUTE TO WORK PROPERLY */}
        {css}
      </style>
      {Preview && <Preview />}
      <Editor
        language='js'
        code={code}
        placeholder='WRITE REACT CODE HERE'
        onValueChange={getJsCode}
        onChange={handleJsChange}
        onKeyDown={handleJsKeyDown}
        className={textAreaClassName}
      />
      <Editor
        language='css'
        code={css}
        placeholder='WRITE CSS CODE HERE'
        onValueChange={(value) => {
          handleCssChange(value)
          if (getCssCode) getCssCode(value)
        }}
        className={textAreaClassName}
      />
      {typeof children === 'function' && children(code, css)}
      {render && render(code, css)}
    </div>
  )
}

FullEditor.defaultProps = {
  initialCode: exampleCode,
  initialCss: ``
}
