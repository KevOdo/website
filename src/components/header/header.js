import React, { Component } from "react"
import { Link } from "react-router-dom"
import Reveal from "react-reveal/Reveal"
import "./header.scss"

class Header extends Component {
  render() {
    return (
      <header>
        <section class="hero hero-image is-medium">
          <div class="hero-body">
            <div class="container">
              <Reveal duration="2000">
                <div>
                  <h1 class="title text ">Kevin O'Donnell</h1>
                </div>
              </Reveal>
            </div>
          </div>
          <div class="hero-foot">
            <nav
              class="navbar is-dark"
              role="navigation"
              aria-label="main navigation"
            >
              <div class="navbar-brand">
                <p
                  role="button"
                  class="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </p>
              </div>
              <div class="navbar-menu is-spaced" id="nav-menu">
                <Link to="/" class="navbar-item text is-family-secondary">
                  Home
                </Link>
                <Link to="/Projects" class="navbar-item text">
                  Projects
                </Link>
                <Link to="/Contact" class="navbar-item text">
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
