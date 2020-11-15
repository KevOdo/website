import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import "./App.scss"
import "react-bulma-components/dist/react-bulma-components.min.css"

import Header from "./components/header/header.js"
import Homepage from "./components/pages/homepage.js"
import Projects from "./components/pages/projectpage.js"
import Contact from "./components/pages/contactpage.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div classname="App">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App
