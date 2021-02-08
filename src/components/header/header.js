import React, { Component } from "react"
import { Link } from "react-router-dom"
import Fade from "react-reveal/Fade"
import "./header.scss"

class Header extends Component {
  render() {
    return (
      <header>
        <section className="hero is-medium">
          <div>
            <Fade duration={3000}>
              <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                  <div className="navbar-item">
                    <div>
                      <h1 className="title text ">Kevin O'Donnell</h1>
                    </div>
                  </div>
                  <p
                    role="button"
                    className="navbar-burger burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="nav-menu"
                  >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </p>
                </div>
                <div className="navbar-menu is-spaced" id="nav-menu">
                  <Link to="/" className="navbar-item text is-family-secondary">
                    Home
                  </Link>
                  <Link to="/Projects" className="navbar-item text">
                    Projects
                  </Link>
                  <Link to="/Contact" className="navbar-item text">
                    Contact
                  </Link>
                </div>
              </nav>
            </Fade>
          </div>
        </section>
      </header>
    )
  }
}

export default Header
