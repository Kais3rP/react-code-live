import { useState } from 'react'
import { exampleCss } from '../../data/exampleCode'

export default function useManageCss(initialCss) {
  const [css, setCss] = useState(
    typeof initialCss === 'string' ? initialCss : exampleCss
  )

  return {
    css,
    handleCssChange: (value) => setCss(value)
  }
}
