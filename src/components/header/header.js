import React, { Component } from "react"
import { nav } from "react-bulma-components"

class Header extends Component {
  render() {
    return (
      <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-menu">
            <a class="navbar-item">Home</a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>
              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
