import React from 'react'
import Editor from 'react-code-live'
import Header from './Header'
import styled from 'styled-components'
import styles from './styles.module.css'

const icons = {
  js: <i className={`fab fa-js-square ${styles.codeLogo}`}></i>,
  css: <i className={`fab fa-css3-alt ${styles.cssLogo}`}></i>,
}
const App = () => {
  return (
    <div>
      <Header />
      <Features />
      {data.map((el) => (
        <Editor
          key={el.id}
          className={styles.container}
          initialJs={el.js}
          initialCss={el.css}
          jsPlaceholder='WRITE JS CODE HERE'
          cssPlaceholder='WRITE CSS CODE HERE'
          icons={icons}
          showControls={true}
          storageIdentifier={el.id}
          scope={{ styled: el.scope?.styled && styled }}
        />
      ))}
    </div>
  )
}
App.displayName = "App"
export default App

function Features() {
  return (
    <ul className={styles.features}>
      <li>Write React code, style it, enjoy the result</li>
      <li>Write CSS the good old way</li>
      <li>
        CSS code is scoped to the previewed component and won't affect other
        code
      </li>
      <li>Support for potentially any library that you pass into the scope</li>
      <li>Support for both function and class declaration</li>
      <li>
        Easy APIs expose the code, so you can use it around your application
      </li>
    </ul>
  )
}

const initialCss = `.__custom__live__react__ {
width:150px;
height:150px;
background:tomato;
color:#FFF;
display:flex;
border-radius: 50%;
justify-content:center;
align-items:center;
padding:5px;
}

.__custom__live__react__ > h5 {
text-align: center;
}
`

const initialCss2 = `.__custom__live__react__ {
width:150px;
height:150px;
background:lightgreen;
color:#FFF;
display:flex;
border-radius: 50%;
justify-content:center;
align-items:center;
padding:5px;
}

.__custom__live__react__ > h5 {
text-align: center;
}
`
const initialCss3 = `.__custom__live__react__ {
width:150px;
height:150px;
background:lightseagreen;
color:#FFF;
display:flex;
border-radius: 50%;
justify-content:center;
align-items:center;
padding:5px;
}

.__custom__live__react__ > h5 {
text-align: center;
}
`
const functionExample = `function Test () {
  return (
    <div className="__custom__live__react__">
      <h5>Functional Component</h5>
    </div>
    )
}`

const arrowFunctionExample = `const Test = () => {
  return (
    <div className="__custom__live__react__">
      <h5>Arrow Function Component!</h5>
    </div>
    )
}`

const classExample = `class Test extends Component {
  render(){
    return (
      <div className="__custom__live__react__">
        <h5>Class Component!</h5>
      </div>
      )
  }
}`

const styledExample = `const WithStyled = () => {
return (
  <StyledDiv>
    <h5>Styled Components</h5>
  </StyledDiv>
)
}

const StyledDiv = styled.div\`
width:150px;
height:150px;
background:darkmagenta;
color:#FFF;
display:flex;
border-radius: 50%;
justify-content:center;
align-items:center;
padding:5px;
& > h5 {
  text-align: center;
}
\`
`

const toDoExampleJs = `class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      term: "",
      filter: "ALL"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.checkAll = this.checkAll.bind(this);
    this.uncheckAll = this.uncheckAll.bind(this);
    this.checkboxStyle = this.checkboxStyle.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  handleItemClick({ value, done }) {
    console.log(value, done);
    this.setState(state => ({
      todo: state.todo.map(item =>
        item.value === value ? { value, done: !done } : item
      )
    }));
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.state.term.length > 0) {
      this.setState(state => ({
        term: "",
        todo: [...state.todo, { value: state.term, done: false }]
      }));
    }
  }

  handleDelete({ value }) {
    const index = this.state.todo.findIndex(el => el.value === value);
    this.setState(state => ({
      todo: [...state.todo.slice(0, index), ...state.todo.slice(index + 1)]
    }));
  }

  checkAll() {
    this.setState(state => ({
      todo: state.todo.map(item => ({ value: item.value, done: true }))
    }));
  }

  uncheckAll() {
    this.setState(state => ({
      todo: state.todo.map(item => ({ value: item.value, done: false }))
    }));
  }
  checkboxStyle(done) {
    return {
      textDecoration: done ? "line-through" : "none"
    };
  }
  render() {
    console.log(this.state.todo);
    return (
      <div className="container">
        <div className="wrapper">
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="Add task!"
              value={this.state.term}
              onChange={this.handleChange}
            />
            <button type="submit">ADD</button>
          </form>
          <h5 className="todos-left">
            {this.state.todo.filter(item => !item.done).length} todo left
          </h5>
          <ul className="list-style">
            {this.state.todo
              .filter(item => {
                switch (this.state.filter) {
                  case "ALL":
                    return item;
                  case "ACTIVE":
                    return !item.done;
                  case "COMPLETED":
                    return item.done;
                }
              })
              .map(item => (
                <li
                  onClick={() => this.handleItemClick(item)}
                  className="outer-li"
                  key={item.value}
                >
                  <div className="item-checkbox">
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() => this.handleItemClick(item)}
                    />
                  </div>
                  <div className="item-text">
                    <span style={this.checkboxStyle(item.done)}>
                      {item.value}
                    </span>
                  </div>
                  <div className="item-remove-div">
                    <button
                      className="item-remove"
                      onClick={() => this.handleDelete(item)}
                    >
                      &times;
                    </button>
                  </div>
                  <br />
                </li>
              ))}
          </ul>
          <div>
            <div className="center-b">
              <button onClick={this.checkAll}>Check All</button>
                <button onClick={this.uncheckAll}>Uncheck All</button>
              <button onClick={() => this.setState({ filter: "ACTIVE" })}>
                Active
              </button>
              <button onClick={() => this.setState({ filter: "COMPLETED" })}>
                Completed
              </button>
              <button onClick={() => this.setState({ filter: "ALL" })}>
                All
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

`

const toDoExampleCss = `* {
  box-sizing: border-box;
}

form {
  display: flex;
  height: 40px;
}

input[type="text"] {
  border: 2px solid #e7e7e7;
  background: #f1f1f1;
  height: 2rem;
  width:100%;
}

.wrapper button {
  height: 2rem;
  background-color: lightblue;
  color: black;
  border: 2px solid #e7e7e7;
  border-radius: 5px;
  cursor: pointer;
}

.wrapper button:hover {
  transform: scale(1.1);
}

.wrapper button.active {
  transform: scale(0.9);
}

.wrapper {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border: 2px solid black;
  border-radius:5px;
  position: relative;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding:10px;
  color: #222;
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.center-b {
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  flex-wrap: wrap; 
}

.item-remove {
  background-color: transparent;
  border: 0;
  color: red;
  font-size: 2rem;
  vertical-align: middle;
  cursor: pointer;
  outline: none;
   display: flex;
  align-items: center;
  justify-content: center;
}

ul {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.outer-li {
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-style {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  list-style: none;
}

`

const data = [
  {
    id: 1,
    js: functionExample,
    css: initialCss,
  },
  {
    id: 2,
    js: arrowFunctionExample,
    css: initialCss2,
  },
  {
    id: 3,
    js: classExample,
    css: initialCss3,
  },
  {
    id: 4,
    js: styledExample,
    css: ``,
    scope: {
      styled: true,
    },
  },
  { id: 5, js: toDoExampleJs, css: toDoExampleCss },
]

//EDITOR PROPS WHEN YOU NEED TO INTERACT WITH DATA IN YOUR PARENT, IT ACCEPTS:
// - GETTERS
// - RenderProp
// - RenderProp through children

/* <Editor
      className={styles.container}
      initialCode={el.js}
      initialCss={el.css}
      textAreaClassName={styles.custom}
      getJsCode={getJsCode}
      getCssCode={getCssCode}
      render={(code,css) => <button onClick={() => console.log(code,css)}>SUBMIT</button>}
    >
      {(code,css) => <h5>{code}</h5>}
    </Editor> */
