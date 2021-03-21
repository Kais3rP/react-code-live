import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Editor from './FullEditor'

// Mock errors

global.console.error = jest.fn()

describe('Testing the main render of the three containers: JS CODE, CSS CODE and PREVIEW', () => {
  it('should render JS wrapper correctly', () => {
    render(<Editor />)
    const jsWrapper = screen.getByTestId('js-wrapper')
    expect(jsWrapper).toBeInTheDocument()
  })
  it('should render JS container correctly', () => {
    render(<Editor />)
    const jsContainer = screen.getByTestId('js-container')
    expect(jsContainer).toBeInTheDocument()
  })
  it('should render CSS wrapper correctly', () => {
    render(<Editor />)
    const cssWrapper = screen.getByTestId('css-wrapper')
    expect(cssWrapper).toBeInTheDocument()
  })
  it('should render CSS container correctly', () => {
    render(<Editor />)
    const cssContainer = screen.getByTestId('css-container')
    expect(cssContainer).toBeInTheDocument()
  })
  it('should render PREVIEW container correctly', () => {
    render(<Editor />)
    const previewContainer = screen.getByTestId('preview-container')
    expect(previewContainer).toBeInTheDocument()
  })
  it('should render PREVIEW code when receiving valid JS code', () => {
    const jsCode = `
    function Test(){
      return "test function component"
    }
    `
    render(<Editor initialJs={jsCode} />)
    expect(screen.getByText('test function component')).toBeInTheDocument()
  })
})

describe('Testing that the library throws Errors for all the invalid JS and JSX syntax', () => {
  it('should throw an Error if the function passed has wrong JS syntax', () => {
    const jsCode = `
      function Test(){
  
      `
    render(<Editor initialJs={jsCode} />)
    expect(screen.getByTestId('error-container')).toBeInTheDocument()
  })
  it("should throw an Error if the function passed has no return statemnt or it doesn't return anything", () => {
    const jsCode = `
      function Test(){
      return
      }
      `
    const jsCode2 = `
      function Test(){}
      `
    const jsCode3 = `
      const Test = () => {}
      `
    const jsCode4 = `
      const Test = () => 
      `
    const codes = [jsCode, jsCode2, jsCode3, jsCode4]
    for (const code of codes) {
      const { unmount } = render(<Editor initialJs={code} />)
      expect(screen.getByTestId('error-container')).toBeInTheDocument()
      unmount()
    }
  })
  it('should throw an Error if the function passed has wrong JSX syntax', () => {
    const jsCode = `
      function Test(){
        return(
          <div style="Wrong_style">test</div>
        )
      `
    const jsCode2 = `
      function Test(){
        return(
          <div style={color: "red"}>test</div>
        )
      `
    const codes = [jsCode, jsCode2]
    for (const code of codes) {
      const { unmount } = render(<Editor initialJs={code} />)
      expect(screen.getByTestId('error-container')).toBeInTheDocument()
      unmount()
    }
  })
})

describe('Testing that not supported syntax will not render neither the Preview nor the Error', () => {
  it('should not render the Preview if you write some variables before the function', () => {
    const jsCode = `
    const wrong = "test"

    function Test(){
      return wrong
    }
    `
    render(<Editor initialJs={jsCode} />)
    expect(screen.getByTestId('preview-container')).toBeEmptyDOMElement()
  })
  it('should not render the Error if you write some variables before the function', () => {
    const jsCode = `
    const wrong = "test"

    function Test(){
      return wrong
    }

    `
    render(<Editor initialJs={jsCode} />)
    expect(screen.queryByTestId('error-container')).not.toBeInTheDocument()
  })
})
