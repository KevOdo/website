import React, { Component } from "react"
import Project from "../project.js"
import styled, { keyframes } from "styled-components"
import { fadeIn, fadeInLeft } from "react-animations"
import yumc from "../../assets/yumc-medium.png"

import "./projectpage.scss"

const AnimProj = styled.div`
  animation: 2s ${keyframes`${fadeInLeft}`};
`
const AnimIntro = styled.div`
  animation: 1s ${keyframes`${fadeIn}`};
`

class ProjectPage extends Component {
  render() {
    return (
      <div class="columns">
        <div class=" column is-three-fifths is-offset-one-fifth">
          <AnimIntro>
            <div class="intro has-text-centered">
              <h1 class="title">My projects</h1>
              <h2 class="subtitle">
                Here you can find a summary of my past and current projects
              </h2>
            </div>
          </AnimIntro>
          <div class="project">
            <AnimProj>
              <Project
                title="YUMC Website"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus
              erat ac urna dapibus, eu blandit nunc rutrum. Morbi semper feugiat
              odio."
                img_src={yumc}
                link="https://yumc.uk"
              />
            </AnimProj>
          </div>
          <div class="project">
            <AnimProj>
              <Project
                title="YUMC Website"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus
              erat ac urna dapibus, eu blandit nunc rutrum. Morbi semper feugiat
              odio."
                img_src={yumc}
                link="https://yumc.uk"
              />
            </AnimProj>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectPage
