import React from 'react'
import transform from './transform'
import withErrorBoundary from './withErrorBoundary'
import ErrorLogger from '../../components/error-logger/ErrorLogger'
import evaluate from './evaluate'
import {
  hasHooks,
  isClass,
  hasRender,
  getFunction,
  getFunctionAndConst,
  getArrowFunction,
  getArrowFunctionAndConst,
  getClass,
  getClassAndConst
} from '../utils'

export const generateElement = ({ code = '', scope = {} }, errorCallback) => {
    // CHECK CODE REGEXPS
    const _isClass = isClass(code)
    const _hasRender = hasRender(code)
    const _hasHooks = hasHooks(code)

    const transformed = formatAndTranspile(code)

    return withErrorBoundary(evaluate(transformed, scope), errorCallback)
}

function formatAndTranspile(code) {
  // ADDRESS ARROW FUNCTIONS BY LEAVING A LAMBDA DECLARATION
  code = code.trim().replace(/^(const|let|var).*=.*?(?=\()/, '')
  const reactFunction =
    getClass(code) ||
    getClassAndConst(code) ||
    getFunction(code) ||
    getFunctionAndConst(code) ||
    getArrowFunction(code) ||
    getArrowFunctionAndConst(code)
  const variables = code.replace(reactFunction, '')

  code = `const {useState, useEffect, useRef, useMemo, useCallback, Component } = React;
  ${variables}
  return (${reactFunction})`
  return transform(code).trim()
}
