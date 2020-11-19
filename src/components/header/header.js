import React, { Component } from "react"
import { Link } from "react-router-dom"
import Fade from "react-reveal/Fade"
import "./header.scss"

class Header extends Component {
  render() {
    return (
      <header>
        <section className="hero hero-image is-medium">
          <div className="hero-body">
            <div className="container">
              <Fade duration={3000}>
                <div>
                  <h1 className="title text ">Kevin O'Donnell</h1>
                </div>
              </Fade>
            </div>
          </div>
          <div className="hero-foot">
            <nav
              className="navbar is-dark"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <p
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
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
          </div>
        </section>
      </header>
    )
  }
}

export default Header
