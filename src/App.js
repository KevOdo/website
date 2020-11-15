import React, { Component } from "react"
import "react-bulma-components/dist/react-bulma-components.min.css"

import Header from "./components/header/header.js"

class App extends Component {
  render() {
    return (
      <div classname="App">
        <Header />
      </div>
    )
  }
}

export default App
