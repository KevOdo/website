import React, { Component } from "react"
import "./contactpage.scss"

class Projects extends Component {
  render() {
    return <div className="contact"></div>
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {}
}

export default Projects
