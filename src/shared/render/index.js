import withErrorBoundary from './withErrorBoundary'
import { formatAndTranspile } from './formatAndTranspile'
import evaluate from './evaluate'

export const generateElement = ({ js = '', scope = {} }, errorCallback) => {
  const transformed = formatAndTranspile(js)
  const evaluated = evaluate(transformed, scope)
  return withErrorBoundary(evaluated, errorCallback)
}
