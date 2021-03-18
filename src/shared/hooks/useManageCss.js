import { useState } from 'react'

export default function useManageCss(initialCss) {
  const [css, setCss] = useState(
    typeof initialCss === 'string' ? initialCss : ``
  )

  return {
    css,
    handleCssChange: (value) => setCss(value),
  }
}
