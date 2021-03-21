import React from 'react'
import PropTypes from 'prop-types'
import Editor from '../editor/Editor'
import ErrorLogger from '../error-logger/ErrorLogger'
import useManageJs from '../../shared/hooks/useManageJs'
import useManageCss from '../../shared/hooks/useManageCss'
import Controls from '../controls/Controls'
import 'style-scoped'

export default function FullEditor({
  initialJs,
  initialCss,
  scope,
  getJsCode,
  getCssCode,
  icons,
  showControls,
  isErrorOutside,
  render,
  children,
  ...props
}) {
  const {
    js,
    setJs,
    Preview,
    handleJsChange,
    handleJsKeyDown,
    error,
  } = useManageJs(initialJs, scope)
  const { css, setCss, handleCssChange } = useManageCss(initialCss)

  return (
    <div {...props}>
      <style scoped key={css}>
        {/* THE KEY ATTRIBUTE HAS TO BE DYNAMIC AND UNIQUE IN THIS CASE TO MAKE THE SCOPE ATTRIBUTE TO WORK PROPERLY */}
        {css}
      </style>
      <div data-id='preview-container'>{Preview && <Preview />}</div>
      <div data-id='js-wrapper'>
        {showControls && <Controls code={js} setCode={setJs} />}
        {icons?.js && icons.js}
        <div data-id='js-container'>
          <Editor
            language='js'
            code={js}
            placeholder='WRITE REACT CODE HERE'
            onChange={(e) => {
              const { value } = e.target
              handleJsChange(e)
              if (getJsCode) getJsCode(value)
            }}
            onKeyDown={handleJsKeyDown}
          />
          {error && !isErrorOutside && <ErrorLogger error={error} />}
        </div>
      </div>
      <div data-id='css-wrapper'>
        {showControls && <Controls code={css} setCode={setCss} />}
        {icons?.css && icons.css}
        <div data-id='css-container'>
          <Editor
            language='css'
            code={css}
            placeholder='WRITE CSS CODE HERE'
            onChange={(e) => {
              const { value } = e.target
              handleCssChange(e)
              if (getCssCode) getCssCode(value)
            }}
          />
        </div>
      </div>
      {error && isErrorOutside && <ErrorLogger error={error} />}
      {typeof children === 'function' && children(js, css)}
      {render && render(js, css)}
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
  icons: PropTypes.object,
  render: PropTypes.func,
  children: PropTypes.node,
}
