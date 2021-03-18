import React from 'react'
import PropTypes from 'prop-types'
import Editor from '../editor/Editor'
import ErrorLogger from '../error-logger/ErrorLogger'
import useManageJs from '../../shared/hooks/useManageJs'
import useManageCss from '../../shared/hooks/useManageCss'
import 'style-scoped'

export default function FullEditor({
  initialJs,
  initialCss,
  scope,
  getJsCode,
  getCssCode,
  render,
  children,
  ...props
}) {
  const { code, Preview, handleJsChange, handleJsKeyDown, error } = useManageJs(
    initialJs,
    scope
  )
  const { css, handleCssChange } = useManageCss(initialCss)

  return (
    <div {...props}>
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
          onChange={(e) => {
            const { value } = e.target
            handleJsChange(e)
            if (getJsCode) getJsCode(value)
          }}
          onKeyDown={handleJsKeyDown}
        />
      </div>
      <div data-id='css-container'>
        <Editor
          language='css'
          code={css}
          placeholder='WRITE CSS CODE HERE'
          onChange={(e) => {
            const { value } = e.target
            handleCssChange(value)
            if (getCssCode) getCssCode(value)
          }}
        />
      </div>
      {error && <ErrorLogger error={error} />}
      {typeof children === 'function' && children(code, css)}
      {render && render(code, css)}
    </div>
  )
}

/* FullEditor.defaultProps = {
  initialJs: exampleJs,
  initialCss: exampleCss
} */

FullEditor.propTypes = {
  initialJs: PropTypes.string,
  initialCss: PropTypes.string,
  scope: PropTypes.object,
  textAreaClassName: PropTypes.string,
  getJsCode: PropTypes.func,
  getCssCode: PropTypes.func,
  render: PropTypes.func,
  children: PropTypes.node,
}
