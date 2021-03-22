import { useState } from 'react'

export default function useManageCss(initialCss) {
  const [css, setCss] = useState(initialCss)

  return {
    css,
    setCss,
    handleCssChange: (e) => setCss(e.target.value),
  }
}
