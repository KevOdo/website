import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faTwitter } from "@fortawesome/free-brands-svg-icons"
import "./contactpage.scss"

class Projects extends Component {
  render() {
    return (
      <div className="contact columns main">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="title text centered">Where to find me</div>

          <div className="skillbox centered">
            <div>
              <a href="https://github.com/KevOdo">
                <FontAwesomeIcon icon={faGithubAlt} size="4x" className="text" />
              </a>
            </div>
          </div>

          <div className="skillbox centered">
            <div className="text title  ">kev.odas@gmail.com</div>
          </div>

          <div className="skillbox centered">
            <div>
              <a href="https://twitter.com/oddy_kevin">
                <FontAwesomeIcon icon={faTwitter} size="4x" className="text" />
              </a>
            </div>
          </div>

          <div className="extend"></div>
        </div>
      </div>
    )
  }
}

export default Projects
