import transform from './transform'
import {
  getFunction,
  getFunctionAndConst,
  getArrowFunction,
  getArrowFunctionAndConst,
  getClass,
  getClassAndConst,
} from '../utils'

export function formatAndTranspile(code) {
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
  // BUILDING THE FINAL FUNCTION BEFORE BUBLE TRANSPILING
  _code = `const {useState, useEffect, useRef, useMemo, useCallback, Component } = React;
    ${variables}
    return (${reactFunction})`
  return transform(_code).trim()
}
