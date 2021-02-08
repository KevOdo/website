import React, { Component } from "react"
import Fade from "react-reveal/Fade"

import profile from "../../assets/me2.jpg"

import "./homepage.scss"

class Homepage extends Component {
  render() {
    const desc = "I'm one half of the ModSquad"

    const intro = (
      <div className="about has-text-centered">
        <Fade delay={2000}>
          <h1 className="title text">Who am I?</h1>
        </Fade>
        <Fade delay={3000} duration={1000}>
          <h2 className="subtitle text">{desc}</h2>
        </Fade>
      </div>
    )

    const cardImage = (
      <Fade delay={1000}>
        <figure className="image">
          <img src={profile} alt=""></img>
        </figure>
      </Fade>
    )

    return (
      <div>
        <div className="columns main has-text-centered">
          <div className=" column is-three-fifths is-offset-one-fifth">
            <div className="card columns">
              <div className="card-image column is-two-fifths"> {cardImage}</div>
              <div className="card-content column is-three-fifths">{intro}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
