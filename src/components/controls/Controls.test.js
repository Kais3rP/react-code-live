import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Controls from './Controls'

// FIXTURE
const editedCode = `
function Test (){
    return "edited test"
}
`
const mockFunction = jest.fn()

const initialState = {
  code: `
  function Test (){
      return "test"
  }
  `,
  setCode(code) {
    this.code = code
    this.test = code
    mockFunction()
  },
}

// localStorage Mock

global.localStorage = {
  content: [],
  setitem(key, value) {
    this.content.push = { key, value }
  },
  getItem(key) {
    return this.content.find((el) => el.key === key)
  },
}

// console.error Mock

global.console.error = jest.fn()

global.navigator.clipboard = {
  content: '',
  writeText(text) {
    this.content = text
  },
  async readText() {
    return this.content
  },
}

describe('Testing-the-correct-functioning-of-the-control-buttons', () => {
  it('should copy the content of the JS textarea to the clipboard, when clicking on the Copy button', async () => {
    render(<Controls code={editedCode} setCode={initialState.setCode} />)
    const copyBtn = screen.getByText('Copy')
    fireEvent(
      copyBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    const clipboard = await navigator.clipboard.readText()
    expect(clipboard).toEqual(editedCode)
  })
  it('should paste the content of the JS textarea to the textarea, when clicking on the Paste button', async () => {
    const setCode = initialState.setCode.bind(initialState)
    render(<Controls code={initialState.code} setCode={setCode} />)
    const pasteBtn = screen.getByText('Paste')
    fireEvent(
      pasteBtn,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    await waitFor(() => expect(mockFunction).toHaveBeenCalled())
    expect(initialState.test).toEqual(editedCode)
  })
})
