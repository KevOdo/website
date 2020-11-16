import React, { Component } from "react"
import Project from "../project.js"
import Zoom from "react-reveal/Zoom"
import Reveal from "react-reveal/Reveal"
import yumc from "../../assets/yumc-medium.png"

import "./projectpage.scss"

class ProjectPage extends Component {
  render() {
    return (
      <div class="columns">
        <div class=" column is-three-fifths is-offset-one-fifth">
          <Reveal>
            <div>
              <div class="intro has-text-centered">
                <h1 class="title">My projects</h1>
                <h2 class="subtitle">
                  Here you can find a summary of my past and current projects
                </h2>
              </div>
            </div>
          </Reveal>
          <div class="project">
            <Zoom>
              <Project
                title="YUMC Website"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus
              erat ac urna dapibus, eu blandit nunc rutrum. Morbi semper feugiat
              odio."
                img_src={yumc}
                link="https://yumc.uk"
              />
            </Zoom>
          </div>
          <div class="project">
            <Zoom>
              <Project
                title="YUMC Website"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus
              erat ac urna dapibus, eu blandit nunc rutrum. Morbi semper feugiat
              odio."
                img_src={yumc}
                link="https://yumc.uk"
              />
            </Zoom>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPage
