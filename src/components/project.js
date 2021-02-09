import React, { Component } from "react"

import "./project.scss"

class Project extends Component {
  render(props) {
    return (
      <div>
        <div className="project box is-half media">
          <div className="media-left">
            <div className="img-wrap">
              <a href={this.props.link}>
                {console.log(this.props.img_src)}
                <img className="img" src={this.props.img_src} alt="Project" />
              </a>
            </div>
          </div>
          <div>
            <h1 className="is-centered title">{this.props.title}</h1>
            <p>{this.props.description}</p>
            <div className="list">
              <p>
                <b className="has-text-centered">Work done on project:</b>
              </p>
              <ul>{this.props.list}</ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
