import React, { Component } from "react"
import "./header.scss"
import { nav } from "react-bulma-components"
import { Link } from "react-router-dom"

class Header extends Component {
  render() {
    return (
      <header>
        <section class="hero hero-image ">
          <div class="hero-body">
            <div class="container">
              <h1 class="title text">Kevin O'Donnell</h1>
            </div>
          </div>
          <div class="hero-foot">
            <nav
              class="navbar is-link"
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
              <div class="navbar-menu" id="nav-menu">
                <Link to="/" class="navbar-item text">
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
