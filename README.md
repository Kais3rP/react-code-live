[![NPM](https://img.shields.io/npm/v/react-code-live.svg)](https://www.npmjs.com/package/react-code-live) [![JavaScript Style Guide](https://img.shields.io/badge/linting-wesbos-green)](https://github.com/wesbos/eslint-config-wesbos)
[![w3c](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fkais3rp.github.io%2Freact-code-live%2F)](https://validator.w3.org/nu/?showsource=yes&showoutline=yes&showimagereport=yes&doc=https%3A%2F%2Fkais3rp.github.io%2Freact-code-live%2F)

# react-code-live

> Live coding Component for React, with scoped CSS and Real Time Preview!

## Demo page:

[https://kais3rp.github.io/react-code-live/](https://kais3rp.github.io/react-code-live/)

## Install

```bash
npm install --save react-code-live
```

## Usage
### The Editor works by default even without taking extra props
```jsx

import React from 'react'
import Editor from 'react-code-live'

const App = () => <Editor/>
}
```
## Styling

To style the components, you can use the **className** prop, that will style the main container, while to
access the containers of the 4 components (JS Textarea, CSS Textarea, Preview and Error), you can use the dataset attributes of **data-id** to select the containers:

```css
div[data-id="error-container"]
div[data-id="preview-container"]
div[data-id="js-container"]
div[data-id="css-container"]
```
You can also use the two wrappers:
```css
div[data-id="jss-wrapper"]
div[data-id="css-wrapper"]
```
to style elements inside the container ( Controls && Error ) as absolute positioned overlays over the textareas (as you can see in the Demo).

# API
  
|Prop  |Type   |Effect   |Example   |
|---|---|---|---|
| **className**  |**String**   |It is applied to the main container **'div'**   | className="container"   |
|**jsPlaceholder**   |**String**   |The place holder for the JS Textarea   |jsPlaceholder="WRITE JS CODE HERE"   |
|**cssPlaceholder**   |**String**   |The placeholder for the CSS Textarea   |cssPlaceholder="WRITE CSS CODE HERE"   |
|**initialJs**    |**String**|The JS code that you want to display as default content of the Textarea    |initialJs={\`<br>function Test ( ){<br> return "hello"<br>}`}     |
|**initialCSS**  |**String**|The CSS code that you want to display as default content of the Textarea  |initialCss={\`div {<br> color: red;<br> }`}  |
|**icons** |**Object** |You need to pass an object with a js and a css property and a JSX value, that JSX is intended to render some sort of indicator to distinguish the Textarea of JS from that of CSS|icons={{<br> js: <>JS</>,<br> css:<>CSS</><br>}} |
|**showControls** |**Boolean** |Shows the control buttons "Copy, Paste, Clear, Save, Load" |showControls={true} |
|**storageIdentifier** |**String** |This id is used to identify the textarea to match the saved and loaded content on localStorage |storageIdentifier="js#first" |
|**scope** |**Object** |In this object you can pass any JS variable that you want to be in scoped with the code that will be written in the JS Textarea, you can pass any library or object, and it will be referenced inside |scope={{<br>color: "magenta"<br>}} |


##### The testing environment is still under development, so if you wish to contribute, please open an issue. Thanks.

## License

MIT © [Cesare Polonara](https://github.com/Kais3rP)
