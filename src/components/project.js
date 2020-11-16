import React, { Component } from "react"

import "./project.scss"

class Project extends Component {
  render(props) {
    return (
      <div>
        <div class="box is-half media">
          <div class="media-left">
            <div class="img-wrap">
              <a href={this.props.link}>
                <img src={this.props.img_src} alt="Project" />
              </a>
            </div>
          </div>
          <div>
            <h1 class="is-centered">{this.props.title}</h1>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Project
