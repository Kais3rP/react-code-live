import React from 'react'
import { _poly } from './transform'

const evaluate = (code, scope) => {
  // ADD THE SCOPE OBJECT TO THE SCOPE OF OUR REACT COMPONENT
  const scopeKeys = Object.keys(scope)
  const scopeValues = scopeKeys.map((key) => scope[key])
  // eslint-disable-next-line no-new-func
  const res = new Function('_poly', 'React', ...scopeKeys, code)
  return res(_poly, React, ...scopeValues)
}

export default evaluate
