import { useState } from "react";

export default function useManageCss(initialCss) {
  const [css, setCss] = useState(initialCss || ``);

  return {
    css,
    handleCssChange: value => setCss(value)
  };
}
