import React, { Component } from "react"

import "./project.scss"

class Project extends Component {
  render(props) {
    return (
      <div className="project is-multiline centered box is-half columns">
        <div className="column is-two-fifths">
          <div className="img-wrap">
            <a href={this.props.link}>
              <img className="img" src={this.props.img_src} alt="Project" />
            </a>
          </div>
        </div>
        <div className="column is-three-fifths">
          <h1 className="is-centered text title">{this.props.title}</h1>
          <p className="text">{this.props.description}</p>
          <div className="list">
            <p>
              <b className="has-text-centered">Work done on project:</b>
            </p>
            <ul>{this.props.list}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
