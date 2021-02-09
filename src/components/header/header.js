import React from "react"
import { Link } from "react-router-dom"
import Fade from "react-reveal/Fade"
import "./header.scss"

const Navbar = () => {
  const [isActive, setisActive] = React.useState(false)
  return (
    <header className="dark">
      <section className="hero is-medium">
        <div>
          <Fade duration={3000}>
            <nav className="navbar" role="navigation" aria-label="main navigation">
              <div className="navbar-brand">
                <p
                  onClick={() => {
                    setisActive(!isActive)
                  }}
                  role="button"
                  className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="nav-menu"
                >
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </p>
              </div>
              <div
                className={`navbar-menu ${isActive ? "is-active" : ""}`}
                id="nav-menu"
              >
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

export default Navbar
