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
  jsPlaceholder,
  cssPlaceholder,
  icons,
  showControls,
  isErrorOutside,
  storageIdentifier,
  textareaAttributes,
  theme,
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
  function onJSChange(e) {
    const { value } = e.target
    handleJsChange(e)
    if (getJsCode) getJsCode(value)
  }
  function onCSSChange(e) {
    const { value } = e.target
    handleCssChange(e)
    if (getCssCode) getCssCode(value)
  }
  return (
    <div {...props}>
      <style scoped key={css}>
        {/* THE KEY ATTRIBUTE HAS TO BE DYNAMIC AND UNIQUE IN THIS CASE TO MAKE THE SCOPE ATTRIBUTE TO WORK PROPERLY */}
        {css}
      </style>
      <div data-id='preview-container' data-testid='preview-container'>
        {Preview && <Preview />}
      </div>
      <div data-id='js-wrapper' data-testid='js-wrapper'>
        {showControls && (
          <Controls
            storageIdentifier={storageIdentifier}
            code={js}
            setCode={setJs}
          />
        )}
        {icons?.js && icons.js}
        <div data-id='js-container' data-testid='js-container'>
          <Editor
            language='js'
            code={js}
            placeholder={jsPlaceholder}
            onChange={onJSChange}
            onKeyDown={handleJsKeyDown}
            textareaAttributes={textareaAttributes?.js}
            theme={theme?.js}
          />
          {error && !isErrorOutside && <ErrorLogger error={error} />}
        </div>
      </div>
      <div data-id='css-wrapper' data-testid='css-wrapper'>
        {showControls && (
          <Controls
            storageIdentifier={storageIdentifier}
            code={css}
            setCode={setCss}
          />
        )}
        {icons?.css && icons.css}
        <div data-id='css-container' data-testid='css-container'>
          <Editor
            language='css'
            code={css}
            placeholder={cssPlaceholder}
            onChange={onCSSChange}
            textareaAttributes={textareaAttributes?.css}
            theme={theme?.css}
          />
        </div>
      </div>
      {error && isErrorOutside && <ErrorLogger error={error} />}
      {typeof children === 'function' ? children(js, css) : children}
      {render && typeof render === 'function' && render(js, css)}
    </div>
  )
}

FullEditor.defaultProps = {
  initialJs: '',
  initialCss: '',
  scope: {},
  getJsCode: null,
  getCssCode: null,
  jsPlaceholder: '',
  cssPlaceholder: '',
  icons: null,
  showControls: false,
  isErrorOutside: false,
  storageIdentifier: null,
  textareaAttributes: {},
}

FullEditor.propTypes = {
  initialJs: PropTypes.string,
  initialCss: PropTypes.string,
  scope: PropTypes.object,
  getJsCode: PropTypes.func,
  getCssCode: PropTypes.func,
  jsPlaceholder: PropTypes.string,
  cssPlaceholder: PropTypes.string,
  icons: PropTypes.object,
  showControls: PropTypes.bool,
  storageIdentifier: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isErrorOutside: PropTypes.bool,
  textareaAttributes: PropTypes.object,
  theme: PropTypes.object,
  render: PropTypes.func,
  children: PropTypes.node,
}
