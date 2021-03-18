import React from 'react'
import transform from './transform'
import withErrorBoundary from './withErrorBoundary'
import ErrorLogger from '../../components/error-logger/ErrorLogger'
import evaluate from './evaluate'
import {
  getFunction,
  getFunctionAndConst,
  getArrowFunction,
  getArrowFunctionAndConst,
  getClass,
  getClassAndConst,
} from '../utils'

export const generateElement = ({ code = '', scope = {} }, errorCallback) => {
  const transformed = formatAndTranspile(code)
  return withErrorBoundary(evaluate(transformed, scope), errorCallback)
}

function formatAndTranspile(code) {
  // ADDRESS ARROW FUNCTIONS BY LEAVING A LAMBDA DECLARATION
  let _code = code.trim().replace(/^(const|let|var).*=.*?(?=\()/, '')
  const reactFunction =
    getClass(_code) ||
    getClassAndConst(_code) ||
    getFunction(_code) ||
    getFunctionAndConst(_code) ||
    getArrowFunction(_code) ||
    getArrowFunctionAndConst(_code)
  const variables = _code.replace(reactFunction, '')
  _code = `const {useState, useEffect, useRef, useMemo, useCallback, Component } = React;
  ${variables}
  return (${reactFunction})`
  return transform(_code).trim()
}
