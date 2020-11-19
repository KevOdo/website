import React, { Component } from "react"
import Fade from "react-reveal/Fade"

import "./homepage.scss"

class Homepage extends Component {
  render() {
    const intro = (
      <div className="about has-text-centered">
        <Fade delay={1000}>
          <h1 className="title text">Who am I?</h1>
        </Fade>
        <Fade delay={2000} duration={1000}>
          <h2 className="subtitle text">I'm one half of the ModSquad</h2>
        </Fade>
      </div>
    )

    return (
      <div>
        <div className="columns main has-text-centered">
          <div className=" column is-three-fifths is-offset-one-fifth">{intro}</div>
        </div>
      </div>
    )
  }
}

export default Homepage
