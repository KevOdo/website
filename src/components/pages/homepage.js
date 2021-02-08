import React, { Component } from "react"
import Fade from "react-reveal/Fade"

import profile from "../../assets/me2.jpg"

import "./homepage.scss"

class Homepage extends Component {
  render() {
    const desc = "I'm a little skanky boye"

    const cardImage = (
      <Fade delay={1000}>
        <figure className="a">
          <img className="profile" src={profile} alt=""></img>
        </figure>
      </Fade>
    )

    return (
      <div className="home">
        <div className="columns main">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="card">
              <div className="columns">
                <div className="card-image column is-two-fifths"> {cardImage}</div>
                <div className="card-content column is-three-fifths">
                  <div className="header">
                    <p className="title is-4 text">Who am I?</p>
                  </div>
                  <div className="content is-3 text">{desc}</div>
                </div>
              </div>
              <div className="card-footer">HAHA</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
