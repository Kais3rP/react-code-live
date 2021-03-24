import "./styles/global.css"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { gsap } from "gsap"
import { CSSPlugin } from 'gsap/CSSPlugin'
import chalk from "chalk"

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)

window.logger = function(...args){
    window.console.log(chalk.blue.bold(args))
}

ReactDOM.render(<App />, document.getElementById('root'))
