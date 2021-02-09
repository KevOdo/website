import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import "./App.scss"
import "react-bulma-components/dist/react-bulma-components.min.css"
import Particles from "react-particles-js"

import Header from "./components/header/header.js"
import Homepage from "./components/pages/homepage.js"
import ProjectPage from "./components/pages/projectpage.js"
import Contact from "./components/pages/contactpage.js"
import Footer from "./components/footer/footer.js"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Particles
          className="help"
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
            },
          }}
        />
        <div className="App">
          <Header />
          <div className="rest">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Projects" component={ProjectPage} />
            <Route exact path="/Contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
