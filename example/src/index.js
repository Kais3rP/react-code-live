import "./styles/global.css"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { gsap } from "gsap"
import { CSSPlugin } from 'gsap/CSSPlugin'

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)

ReactDOM.render(<App />, document.getElementById('root'))
