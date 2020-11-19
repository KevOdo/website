import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import "./App.scss"
import "react-bulma-components/dist/react-bulma-components.min.css"

import Header from "./components/header/header.js"
import Homepage from "./components/pages/homepage.js"
import ProjectPage from "./components/pages/projectpage.js"
import Contact from "./components/pages/contactpage.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Projects" component={ProjectPage} />
          <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App
