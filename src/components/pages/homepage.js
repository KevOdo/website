import React, { Component } from "react"
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGitAlt,
  faNodeJs,
  faSass,
  faVuejs,
  faJsSquare,
  faCss3,
  faReact,
  faAws,
  faPhp,
  faPython,
  faJava,
  faUnity,
} from "@fortawesome/free-brands-svg-icons"
import {
  faCode,
  faDatabase,
  faLaptopCode,
  faServer,
} from "@fortawesome/free-solid-svg-icons"
import profile from "../../assets/me2.jpg"
import strapi from "../../assets/strapi-logo.png"

import "./homepage.scss"

class Homepage extends Component {
  render() {
    const desc = (
      <p>
        I'm a recent graduate in Computer Science from the University of York. During
        my time there I worked on game developement, web design, data analytics and
        Artificial Intelligence. Since graduation I've spent my time expanding my
        projects, as well as helping others get into programming.
        <br></br>
        <br></br>
        Other than programming, I'm very passionate about climbing. I joined the York
        University Mountaineering Club during my second year, and was elected as
        Secretary for my Third Year. Running the club was a very fulfilling
        experience, and despite COVID-19 putting a halt to our activities, we had a
        record amount of members since the clubs creation.
        <br></br>
        <br></br>I have dual British and Italian citizenship, as I was born and
        raised in Italy. I am fluent in both languages, and have a B2 level of spoken
        French.
      </p>
    )

    const cardImage = (
      <figure className="a">
        <img className="profile" src={profile} alt=""></img>
      </figure>
    )

    return (
      <div className="home">
        <div className="columns main">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Fade delay={500} duration={2000}>
              <div>
                <h1 className="name text centered is-1">Kevin O'Donnell</h1>
              </div>
            </Fade>

            <div className="columns about">
              <Fade delay={2000}>
                <div className="card-image column is-two-fifths">{cardImage}</div>
              </Fade>
              <Fade delay={3000}>
                <div className="card-content column is-three-fifths">
                  <div className="header">
                    <p className="title is-4 centered text">Who am I?</p>
                  </div>
                  <div className="content is-3 text">{desc}</div>
                </div>
              </Fade>
            </div>

            <Zoom>
              <section className="skillbox centered">
                <h3 className="title is-4 text skilltitle">Basic Tools</h3>
                <div className="container text is-multiline columns">
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faGitAlt} size="2x" />
                    <p>Git</p>
                  </div>
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faCode} size="2x" />
                    <p>VS Code</p>
                  </div>
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faNodeJs} size="2x" />
                    <p>NodeJS</p>
                  </div>
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faUnity} size="2x" />
                    <p>Unity</p>
                  </div>
                </div>
              </section>
            </Zoom>

            <Zoom>
              <section className="skillbox centered">
                <h3 className="title is-4 text skilltitle">Front End</h3>
                <div className="container text is-multiline columns">
                  <div className="column is-one-third">
                    <FontAwesomeIcon icon={faSass} size="2x" />
                    <p>Sass</p>
                  </div>
                  <div className="column is-one-third">
                    <FontAwesomeIcon icon={faVuejs} size="2x" />
                    <p>VueJs</p>
                  </div>
                  <div className="column is-one-third">
                    <FontAwesomeIcon icon={faReact} size="2x" />
                    <p>ReactJs</p>
                  </div>
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faJsSquare} size="2x" />
                    <p>Javascript</p>
                  </div>
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faCss3} size="2x" />
                    <p>CSS</p>
                  </div>
                </div>
              </section>
            </Zoom>

            <Zoom>
              <section className="skillbox centered">
                <h3 className="title is-4 text skilltitle">Back End</h3>
                <div className="container text is-multiline columns">
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faServer} size="2x" />
                    <p>Strapi</p>
                  </div>
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faAws} size="2x" />
                    <p>AWS</p>
                  </div>
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faPhp} size="2x" />
                    <p>PHP</p>
                  </div>
                  <div className="column is-half">
                    <FontAwesomeIcon icon={faDatabase} size="2x" />
                    <p>SQL</p>
                  </div>
                </div>
              </section>
            </Zoom>

            <Zoom>
              <section className="skillbox centered">
                <h3 className="title is-4 text skilltitle">Other</h3>
                <div className="container text is-multiline columns">
                  <div className="column is-one-third">
                    <FontAwesomeIcon icon={faPython} size="2x" />
                    <p>Python</p>
                  </div>
                  <div className="column is-one-third">
                    <FontAwesomeIcon icon={faJava} size="2x" />
                    <p>Java</p>
                  </div>
                  <div className="column is-one-third">
                    <FontAwesomeIcon icon={faLaptopCode} size="2x" />
                    <p>C#</p>
                  </div>
                </div>
              </section>
            </Zoom>
          </div>
        </div>
      </div>
    )
  }
}

export default Homepage
