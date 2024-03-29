import React, { Component } from "react"
import Project from "../project.js"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import yumc from "../../assets/yumc-medium.png"
import tiilo from "../../assets/tiilo.png"

import "./projectpage.scss"

class ProjectPage extends Component {
  render() {
    const intro = (
      <Fade duration={2000}>
        <div>
          <div className="intro has-text-centered">
            <h1 className="title text">My projects</h1>
            <h2 className="subtitle text">
              Here you can find a summary of my past and current projects
            </h2>
          </div>
        </div>
      </Fade>
    )

    function ProjectItem(x) {
      return (
        <Zoom duration={1500}>
          <Project
            title={x.title}
            description={x.description}
            img_src={x.img_src}
            list={List(x.list)}
            link={x.link}
          />
        </Zoom>
      )
    }

    function ProjectCollection() {
      var out = []
      for (var i = 0; i < data.length; i++) {
        out.push(ProjectItem(data[i]))
      }
      return out
    }

    function ListItem(x) {
      return <li>{x}</li>
    }

    function List(x) {
      var out = []
      for (var i = 0; i < x.length; i++) {
        out.push(ListItem(x[i]))
      }
      return out
    }

    const data = [
      {
        title: "YUMC Website",
        description:
          "I helped build this website for the York University Mountaineering Club during my third year of University.",
        img_src: yumc,
        list: [
          "•	Worked on the API and pages of the website",
          "•	Created a system for users to request gear pending admin approval",
          "•	Handled the CMS transition from Directus to Strapi",
          "•	Deployed the CMS using AWS services",
        ],
        link: "https://yumc.uk",
      },
      {
        title: "Tiilo Website",
        description:
          "I helped my best friend and acclaimed R6S player build his personal portfolio website",
        img_src: tiilo,
        list: [
          "•	Helped set up particles js background",
          "•	General technical help with css and js elements",
        ],
        link: "https://tiilo.github.io",
      },
    ]

    return (
      <div className="columns main">
        <div className=" column is-three-fifths is-offset-one-fifth">
          {intro}
          <ProjectCollection />
        </div>
      </div>
    )
  }
}

export default ProjectPage
