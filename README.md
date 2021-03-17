# react-code-live

> Live coding Component for React code!

## Demo page:
[https://kais3rp.github.io/react-code-live/](https://kais3rp.github.io/react-code-live/)

[![NPM](https://img.shields.io/npm/v/react-code-live.svg)](https://www.npmjs.com/package/react-code-live) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-code-live
```

## Usage

```jsx

import React from "react"
import MyLib from "my-lib"

const App = () => {
return(
  <div>
    <Editor
      className={"container_class"}
      initialJs={initialJs}
      initialCss={initialCss}
      textAreaClassName={"textarea_class"}
      scope={{myLib: MyLib }}
    />
  </div>
)};

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

const initialJs = `function Test () {
  return (
    <div className="__custom__live__react__">
      <h5>Functional Component</h5>
    </div>
    )
}`;

export default App;
```
## CUSTOM STYLE

To style the layout, you can use the **className** prop, that will style the main container, the **textAreaClassname** prop that will style both the textareas with code (content will inherit).

To access the containers of the 3 elements you can use the dataset attributes of **data-id** to select the containers:

div[data-id="preview-container"]
div[data-id="js-container"]
div[data-id="css-container"]

### *This is still a *WORK IN PROGRESS*.* 

##### There is no testing environment setup yet, so if you wish to contribute, please open an issue. Thanks.

## License

MIT © [Cesare Polonara](https://github.com/Kais3rP)
