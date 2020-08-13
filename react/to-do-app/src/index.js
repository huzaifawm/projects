import React from 'react'
import ReactDom from 'react-dom'
// Import Style sheets
import './stylesheets/mainStyle.css'
import './stylesheets/headerStyle.css'
import './stylesheets/bodyStyle.css'

// Import main App
import App from './App'

ReactDom.render(<App />, document.getElementById("root"))
