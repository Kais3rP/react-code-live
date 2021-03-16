import React from "react";
import Editor from 'react-code-live';
import styled from "styled-components";
import styles from "./styles.module.css";

const initialCss = `
.__custom__live__react__ {
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
`;

const functionExample = `function Test () {
  return (
    <div className="__custom__live__react__">
      <h5>Functional Component</h5>
    </div>
    )
}`;

const arrowFunctionExample = `const Test = () => {
  return (
    <div className="__custom__live__react__">
      <h5>Arrow Function Component!</h5>
    </div>
    )
}`;

const classExample = `class Test extends Component {
  render(){
    return (
      <div className="__custom__live__react__">
        <h5>Class Component!</h5>
      </div>
      )
  }
}`;

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
background:tomato;
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
`;

const data = [{
  js: functionExample,
  css: initialCss
}, {
  js: arrowFunctionExample,
  css: initialCss
},
{
  js: classExample,
  css: initialCss
},
{
  js: styledExample,
  css: initialCss,
  scope: {
    styled: true
  }
},
{} ]

const App = () => {



return(
  <div>
    { data.map( el =>  <Editor
      className={styles.container}
      initialCode={el.js}
      initialCss={el.css}
      textAreaClassName={styles.custom}
      scope={{styled: el.scope?.styled && styled }}
    />)}
  </div>
)};

export default App;

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